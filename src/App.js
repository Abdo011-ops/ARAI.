export default function App() {
  return (
    <div style={{ 
      height: '100vh', 
      background: 'linear-gradient(135deg, #0F9D58 0%, #0B7E46 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <h1 style={{ fontSize: '4rem', letterSpacing: '5px', marginBottom: '20px' }}>🤖 AR-AI</h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>الإمبراطور عبد الرحمن</p>
      <p style={{ marginTop: '30px' }}>تطبيق الذكاء الاصطناعي الخاص بك</p>
      <p style={{ position: 'absolute', bottom: 30, fontSize: '0.8rem', opacity: 0.6 }}>AR-AI v1.0 | by Emperor Abdulrahman</p>
    </div>
  );
}
