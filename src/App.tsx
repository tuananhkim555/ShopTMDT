import reactLogo from './assets/store.png'
import viteLogo from './assets/admin-panel.png'
import './index.css'
import { useState } from 'react'
import { FaGithub, FaTiktok, FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

function App() {
  const [hoverAdmin, setHoverAdmin] = useState(false);
  const [hoverShop, setHoverShop] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '100vh',
      width: '100%',
      padding: '0 1rem'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        maxWidth: '1000px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginBottom: '2rem',
          '@media (min-width: 768px)': {
            flexDirection: 'row'
          }
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a 
              href="https://shoptuananh-admin.vercel.app" 
              target="_blank" 
              style={{ display: 'block' }}
              onMouseEnter={() => setHoverAdmin(true)}
              onMouseLeave={() => setHoverAdmin(false)}
            >
              <img 
                src={viteLogo} 
                alt="Admin logo" 
                style={{
                  width: hoverAdmin ? '160px' : '150px',
                  height: hoverAdmin ? '160px' : '150px',
                  transition: 'all 0.3s ease',
                  transform: hoverAdmin ? 'rotate(-5deg)' : 'rotate(0deg)',
                  animation: hoverAdmin ? 'shake 0.5s ease-in-out infinite' : 'none'
                }}
              />
            </a>
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>Admin</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a 
              href="https://shoptuananh.vercel.app/" 
              target="_blank" 
              style={{ display: 'block' }}
              onMouseEnter={() => setHoverShop(true)}
              onMouseLeave={() => setHoverShop(false)}
            >
              <img 
                src={reactLogo} 
                alt="Shop logo" 
                style={{
                  width: hoverShop ? '160px' : '150px',
                  height: hoverShop ? '160px' : '150px',
                  transition: 'all 0.3s ease',
                  transform: hoverShop ? 'rotate(5deg)' : 'rotate(0deg)',
                  animation: hoverShop ? 'shake 0.5s ease-in-out infinite' : 'none'
                }}
              />
            </a>
            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>Shop TMDT</p>
          </div>
        </div>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
          <a href="https://tuananhdev.click">tuananhdev.click</a>
        </h1>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <p>
            Chào mừng đến với project Shop Web Thương Mại Điện Tử Của Tuan Anh Dev
          </p>
        </div>
      </div>
      <footer style={{
        width: '100%',
        padding: '1rem 0',
        marginTop: '2rem'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <FaGithub size={24} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <FaTiktok size={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100058628592945" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            <FaFacebook size={24} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaPhone size={24} />
            <span>0766 353 315</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FaMapMarkerAlt size={24} />
            <span>Le Thuy, Quang Binh, Viet Nam</span>
          </div>
        </div>
      </footer>
      <style>
        {`
          @keyframes shake {
            0% { transform: rotate(-5deg); }
            25% { transform: rotate(5deg); }
            50% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
            100% { transform: rotate(-5deg); }
          }
          @media (min-width: 768px) {
            .flex-col {
              flex-direction: row !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default App
