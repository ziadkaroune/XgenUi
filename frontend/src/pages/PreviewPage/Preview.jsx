
import {Link} from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';




export default function Preview(){
    const [zoom , setZoom] = useState(100);
    const htmlString = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Full Elegant Dashboard</title>
  <style>
    :root {
      --bg: #f5f7fa;
      --sidebar-bg: #1f2d3d;
      --sidebar-text: #ecf0f1;
      --header-bg: #ffffff;
      --accent: #4b7bec;
      --card-bg: #fff;
      --radius: 12px;
      --shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: var(--bg);
      display: flex;
      height: 100vh;
    }

    /* Sidebar */
    .sidebar {
      width: 220px;
      background: var(--sidebar-bg);
      color: var(--sidebar-text);
      padding: 20px;
      display: flex;
      flex-direction: column;
    }

    .sidebar h2 {
      margin-bottom: 30px;
      text-align: center;
    }

    .nav-link {
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 10px;
      text-decoration: none;
      color: var(--sidebar-text);
      transition: background 0.3s;
      cursor: pointer;
    }

    .nav-link:hover, .nav-link.active {
      background: #34495e;
    }

    /* Main layout */
    .main {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    /* Header */
    .header {
      background: var(--header-bg);
      padding: 16px 24px;
      box-shadow: var(--shadow);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header h1 {
      font-size: 22px;
      color: var(--accent);
    }

    .header .profile {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #ccc;
    }

    /* Content */
    .content {
      padding: 30px 24px;
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 24px;
      margin-top: 20px;
    }

    .card {
      background: var(--card-bg);
      border-radius: var(--radius);
      padding: 20px;
      box-shadow: var(--shadow);
      transition: transform 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      font-size: 16px;
      margin-bottom: 8px;
      color: var(--accent);
    }

    .card p {
      font-size: 24px;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .sidebar {
        display: none;
      }

      .header h1 {
        font-size: 18px;
      }
    }
  </style>
</head>
<body>

  <!-- Sidebar -->
  <div class="sidebar">
    <h2>MyDash</h2>
    <div class="nav-link active">Dashboard</div>
    <div class="nav-link">Users</div>
    <div class="nav-link">Analytics</div>
    <div class="nav-link">Reports</div>
    <div class="nav-link">Settings</div>
    <div class="nav-link">Logout</div>
  </div>

  <!-- Main content -->
  <div class="main">
    <!-- Header -->
    <div class="header">
      <h1>Dashboard Overview</h1>
      <div class="profile"></div>
    </div>

    <!-- Content -->
    <div class="content">
      <div class="cards">
        <div class="card">
          <h3>Total Users</h3>
          <p>12,450</p>
        </div>
        <div class="card">
          <h3>Monthly Revenue</h3>
          <p>$83,200</p>
        </div>
        <div class="card">
          <h3>New Orders</h3>
          <p>1,034</p>
        </div>
        <div class="card">
          <h3>Support Tickets</h3>
          <p>24</p>
        </div>
      </div>
    </div>
  </div>

</body>
</html>


`;
const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentDocument.open();
      iframe.contentDocument.write(htmlString);
      iframe.contentDocument.close();
    }
  }, []);
    return(
        <>
                  <div className="flex items-center pl-10">
           <aside className=" bg-gradient-to-r from-purple-400 to-gray-700  text-white rounded-2xl h-[85vh] w-[280px] pt-10 px-6 shadow-xl ml-8 relative flex flex-col justify-between">

  {/* Top Section */}
  <div className="space-y-8">
    <Link to="/" className="flex items-center gap-3 text-white hover:text-pink-200 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
      </svg>
      <span className="text-base font-medium">Home</span>
    </Link>

    <div>
      <h2 className="text-lg font-semibold text-pink-100 mb-1">Dashboard Container</h2>
      <p className="text-sm text-white/70">UI Panel</p>
    </div>

    <div className="flex flex-wrap gap-2">
      <span className="bg-white/10 text-white rounded-full px-3 py-1 text-xs">Layers</span>
      <span className="bg-white/10 text-white rounded-full px-3 py-1 text-xs">Styles</span>
    </div>

    <div>
      <h4 className="text-xs uppercase text-white/60 tracking-widest mb-2">Theme Colors</h4>
      <ul className="space-y-2">
        {['Background', 'Border', 'Primary', 'Secondary'].map((item, idx) => (
          <li key={idx} className="bg-white/10 hover:bg-white/20 transition-colors cursor-pointer px-3 py-2 rounded-lg text-sm text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-xs uppercase text-white/60 tracking-widest mb-2 mt-6">Fonts</h4>
      <ul className="space-y-2">
        {['Sora', 'Arial', 'Monument', 'Impact'].map((font, idx) => (
          <li key={idx} className="bg-white/10 hover:bg-white/20 transition-colors cursor-pointer px-3 py-2 rounded-lg text-sm text-white">
            {font}
          </li>
        ))}
      </ul>
    </div>
  </div>


</aside>


                    <main className="w-full bg-[#323232] h-screen relative">

                    <div className="w-1/3 bg-red-600 rounded-3xl ">
                      
<div class="absolute left-1/2 top-5 z-[100] -translate-x-1/2 flex items-center gap-2 rounded-2xl bg-[#313131]/90 p-2 backdrop-blur-xl text-white">

 
  <div class="flex items-center gap-1">
    <button class="p-2 rounded-xl hover:bg-white/10 transition">
    
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
        <path d="M17.6786 6.67857L18 4L18.3214 6.67857L21 7L18.3214 7.32143L18 10L17.6786 7.32143L15 7L17.6786 6.67857Z" />
        <path d="M10.3393 3.33929L10.5 2L10.6607 3.33929L12 3.5L10.6607 3.66071L10.5 5L10.3393 3.66071L9 3.5L10.3393 3.33929Z" />
        <path d="M5 7L16 14L10.5 15.5L7 20L5 7Z" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>

    <button class="p-2 rounded-xl hover:bg-white/10 transition">
    
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
        <path d="M12 5H10.5M19 12.5V13.5M7 19H6C5.44772 19 5 18.5523 5 18V17M5 13.5V10.5M10.5 19H13.5M17 19H18C18.5523 19 19 18.5523 19 18V17M5 7V6C5 5.44772 5.44772 5 6 5H7" />
        <path d="M16.457 4.74727L12.3978 8.80598C11 10.2037 11 13 11 13C11 13 13.7948 13 15.1935 11.6014L19.2527 7.54272M16.457 4.74727L19.2527 7.54272M16.457 4.74727L18.2043 3.00003C18.6124 2.99662 19.5753 3.32267 20.1263 3.87361C20.6773 4.42454 21.0034 5.38746 21 5.79554L19.2527 7.54272" stroke-linecap="square" />
      </svg>
    </button>
  </div>

 
  <div class="h-4 w-px bg-white/10"></div>

 
  <div class="flex items-center gap-2">
    <button onClick={()=>setZoom((zm) => zm > 10 ? zm - 10 : zm)} class="p-1 rounded-full hover:bg-white/10 transition">
   
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
        <path d="M7 12H17" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <div class="w-10 text-center text-sm font-semibold">{zoom}</div>
    <button onClick={()=>setZoom((zm) => zm <= 90 ? zm + 10 : zm)}  class="p-1 rounded-full hover:bg-white/10 transition">
     
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
        <path d="M12 7V17" />
        <path d="M7 12H17" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>

 
  <div class="h-4 w-px bg-white/10"></div>

 
  <div class="flex items-center gap-1">
    <button class="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-white/10 transition">
 
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
        <path d="M7 9.5V14.5C7 16.4 7 17.4 7.4 17.93C7.76 18.4 8.3 18.69 8.89 18.72C9.57 18.76 10.38 18.2 12 17.1L15.6 14.65C16.91 13.76 17.57 13.32 17.79 12.76C17.99 12.27 17.99 11.73 17.79 11.24C17.57 10.69 16.91 10.24 15.6 9.35L12 6.9C10.38 5.8 9.57 5.25 8.89 5.28C8.3 5.31 7.76 5.6 7.4 6.07C7 6.61 7 7.59 7 9.5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>

    <button class="flex h-10 w-10 items-center justify-center rounded-xl hover:bg-white/10 transition">
     
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
        <path d="M5 14V16C5 17.66 6.34 19 8 19H16C17.66 19 19 17.66 19 16V14M12 12V5M12 5L9 8M12 5L15 8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
</div>

                    </div>
                    <div className="w-full h-full   bg-black  flex justify-center items-center">
                        <div className="w-[80%]" style={{ transform: `scale(${zoom / 100})` }}>
                            <div className='flex justify-between text-purple-300'>
                            <h3>screen 1</h3>
                            <h3>copy to figma</h3>
                            </div>
                            <div    className={`bg-black transform  h-[500px] relative`}>
                                <iframe ref={iframeRef} className="w-full h-full  border" />
                                </div>
                        </div>
                    </div>
                    </main>
                  </div>
        </>
    )
}