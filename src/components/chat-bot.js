import React, { useState } from 'react';


function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const toggleButton = () => {
    setIsOpen((prev) => !prev);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput('');

    try {
      const res = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { sender: 'bot', text: data.reply };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Server Not Responded 😢' },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div style={styles.floatingButton} onClick={toggleButton}>
        💬
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div style={styles.chatWindow}>
          <div style={styles.header}>
            <span>Chatbot</span>
            <span style={styles.close} onClick={() => setIsOpen(false)}>
              ❌
            </span>
          </div>

          <div style={styles.chatBody}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={
                  m.sender === 'user' ? styles.userMessage : styles.botMessage
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <div style={styles.inputArea}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              style={styles.input}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} style={styles.sendBtn}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  floatingButton: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    background: '#000',
    color: '#fff',
    width: 60,
    height: 60,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    cursor: 'pointer',
    boxShadow: '0 9px 10px rgba(0,0,0,0.5)',
    animation: 'scan 2s linear infinite',
  },

  chatWindow: {
    position: 'fixed',
    bottom: 90,
    right: 20,
    width: 320,
    height: 420,
    background: '#fff',
    borderRadius: 10,
    boxShadow: '0 7px 10px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    background: '#075E54',
    color: '#fff',
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  close: {
    cursor: 'pointer',
  },

  chatBody: {
    flex: 1,
    padding: 10,
    overflowY: 'auto',
    background: '#ECE5DD',
    display: 'flex',
    flexDirection: 'column',
  },

  userMessage: {
    background: '#DCF8C6',
    padding: 8,
    borderRadius: 8,
    marginBottom: 6,
    alignSelf: 'flex-end',
    maxWidth: '80%',
    float: 'right',
  },

  botMessage: {
    background: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 6,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    float: 'left',
  },

  inputArea: {
    display: 'flex',
    padding: 8,
    borderTop: '1px solid #ccc',
  },

  input: {
    flex: 1,
    padding: 8,
    borderRadius: 20,
    border: '1px solid #ccc',
    outline: 'none',
  },

  sendBtn: {
    marginLeft: 8,
    background: '#377A82',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: 40,
    cursor: 'pointer',
  },
};

export default App;
