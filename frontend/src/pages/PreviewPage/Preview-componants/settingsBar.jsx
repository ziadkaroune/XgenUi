
export default function SettingsBar({setZoom , zoom}){

return(
 <div className="w-1/3  rounded-3xl">
                      
<div class="absolute left-1/2 top-5 z-30 -translate-x-1/2 flex items-center gap-2 rounded-2xl bg-[#313131]/90 p-2 backdrop-blur-xl text-white">

 
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
)
}