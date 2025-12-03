const style = document.createElement('style')
style.textContent = `
body {
  background-color: white;
  margin: 0;
  padding: 0;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.banner {
  background: #ff4757;
  color: white;
  padding: 50px 100px;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 95%;
  max-width: 1600px;
  box-sizing: border-box;
}

.banner h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  line-height: 1.1;
  white-space: nowrap;
}

.banner p {
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.3;
  font-weight: 400;
  opacity: 0.95;
}
`
document.head.appendChild(style)