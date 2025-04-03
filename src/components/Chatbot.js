import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Message from "./Message";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome! Please enter your name to get started:", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [mobile, setMobile] = useState("");
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    email: "",
    productId: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
  });

  const chatContainerRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    let newMessages = [...messages, { text: input, sender: "user" }];
    let nextStep = step;

    try {
      switch (step) {
        case 0:
          setCustomerName(input.trim());
          newMessages.push({ text: `Hi ${input}! Please enter the product unique ID:`, sender: "bot" });
          nextStep = 1;
          break;

        case 1:
          if (input.toLowerCase() === "exit") {
            newMessages.push({ text: "Goodbye! Have a great day!", sender: "bot" });
            nextStep = 0;
          } else {
            const response = await axios.get(`http://localhost:5000/api/product/${input.trim()}`);
            const product = response.data;

            if (!product) {
              newMessages.push({ text: "Product not found. Please enter a valid ID.", sender: "bot" });
            } else {
              setOrderDetails((prev) => ({ ...prev, ...product }));
              newMessages.push({
                text: `Product details: ${product.productName}, ${product.productDescription}, Price: ${product.productPrice}`,
                sender: "bot",
              });
              if (product.img) newMessages.push({ text: "Here is the product image:", sender: "bot", image: product.img });
              newMessages.push({ text: "Do you want to order this product? (Yes/No)", sender: "bot" });
              nextStep = 2;
            }
          }
          break;

        case 2:
          if (input.toLowerCase() === "yes") {
            newMessages.push({ text: "Please enter your address:", sender: "bot" });
            nextStep = 3;
          } else {
            newMessages.push({ text: "Enter another product ID or type 'exit' to leave.", sender: "bot" });
            nextStep = 1;
          }
          break;

        case 3:
          setOrderDetails((prev) => ({ ...prev, address: input.trim() }));
          newMessages.push({ text: "Please enter your email:", sender: "bot" });
          nextStep = 4;
          break;

        case 4:
          setOrderDetails((prev) => ({ ...prev, email: input.trim() }));
          newMessages.push({ text: "Please enter your mobile number:", sender: "bot" });
          nextStep = 5;
          break;

        case 5:
          if (!/^\d{10}$/.test(input.trim())) {
            newMessages.push({ text: "Invalid mobile number. Enter a 10-digit number:", sender: "bot" });
          } else {
            setMobile(input.trim());
            try {
              const otpResponse = await axios.post("http://localhost:5000/api/send-otp", { mobile: input.trim() });

              if (otpResponse.status === 200) {
                newMessages.push({ text: "OTP sent! Enter OTP:", sender: "bot" });
                nextStep = 6;
              }
            } catch (error) {
              console.error("Error sending OTP:", error);
              newMessages.push({ text: "Failed to send OTP. Try again later.", sender: "bot" });
            }
          }
          break;

        case 6:
          try {
            console.log(`Verifying OTP for mobile: ${mobile}`);
            const verifyResponse = await axios.post("http://localhost:5000/api/verify-otp", {
              mobile,
              otp: input.trim(),
            });

            if (verifyResponse.status === 200) {
              newMessages.push({ text: "OTP verified! Placing order...", sender: "bot" });

              const orderPayload = {
                name: customerName.trim(),
                address: orderDetails.address.trim(),
                email: orderDetails.email.trim(),
                mobile: mobile.trim(),
                productId: String(orderDetails.productId),
                productName: orderDetails.productName.trim(),
                productDescription: orderDetails.productDescription ? orderDetails.productDescription.trim() : "No description",
                productPrice: orderDetails.productPrice.replace(/[^\d.]/g, ""),
              };

              console.log("🛒 Final Order Payload:", JSON.stringify(orderPayload, null, 2));

              try {
                const orderResponse = await axios.post("http://localhost:5000/api/place-order", orderPayload, {
                  headers: { "Content-Type": "application/json" },
                });

                console.log("✅ Order Success:", orderResponse.data);

                const orderDetailsResponse = orderResponse.data.orderInfo;
                newMessages.push({ text: "🎉 Order placed successfully!", sender: "bot" });

                newMessages.push({
                  text: `🎉 Order placed successfully!
📦 Product Name: ${orderDetailsResponse.productName}
💰 Price: ₹${orderDetailsResponse.productPrice}
🚚 Expected Delivery Date: ${orderDetailsResponse.deliveryDate}`,
                  sender: "bot",
                });

                if (orderDetails.productImage) {
                  newMessages.push({ text: "Here is your ordered product:", sender: "bot", image: orderDetails.productImage });
                }

                newMessages.push({ text: "Enter another product ID or type 'exit' to leave.", sender: "bot" });
                nextStep = 1;
              } catch (error) {
                console.error("❌ Order Failed:", error.response?.data || error);
                newMessages.push({ text: "⚠️ Order failed. Please try again.", sender: "bot" });
              }
            } else {
              newMessages.push({ text: "⚠️ OTP verification failed. Please enter the correct OTP.", sender: "bot" });
            }
          } catch (error) {
            newMessages.push({ text: "⚠️ OTP verification failed. Please enter the correct OTP.", sender: "bot" });
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.error("ChatBot Error:", error);
      newMessages.push({ text: "Something went wrong. Try again.", sender: "bot" });
    }

    setMessages(newMessages);
    setStep(nextStep);
    setInput("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "52vh",
        maxWidth: "500px",
        margin: "0 auto",
        // border: "1px solid #ccc",
        // borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Chat Messages Container */}
      <div
        ref={chatContainerRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "10px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} image={msg.image} />
        ))}
      </div>

      {/* Input Box and Send Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderTop: "1px solid #ccc",
          background: "#fff",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type here..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={sendMessage}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;