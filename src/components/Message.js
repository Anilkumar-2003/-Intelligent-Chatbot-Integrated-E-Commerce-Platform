const Message = ({ text, sender, image }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: sender === "bot" ? "row" : "row-reverse",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: sender === "bot" ? "#F1F1F1" : "#007BFF",
            color: sender === "bot" ? "#000" : "#FFF",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "70%",
          }}
        >
          <p>{text}</p>
          {image && <img src={image} alt="Product" style={{ width: "100%", borderRadius: "5px" }} />}
        </div>
      </div>
    );
  };
  
  export default Message;
  