import React, { useState, useRef } from "react";

import { FaLocationDot, FaPeopleRoof} from "react-icons/fa6";
import { FaCalendarAlt, FaCat, FaFaucet, FaBed } from "react-icons/fa";

import { PiHandDepositBold } from "react-icons/pi";

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('../assets/images', false, /\.(jpg)$/));

const Anuncio = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  }

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
  return (
    <div className="CONTENT w-full flex flex-col md:flex-row bg-neutral-200 text-gray-900">
        <div className="GALERIA md:w-6/12 md:px-3 md:py-2 p-2 md:ml-2 mx-2 my-5 h-full rounded bg-neutral-100">
          <div className="flex flex-col gap-1">

            <div className="MAIN-IMAGEM relative main-img h-[500px]">
              {selectedImage && <img src={selectedImage} className="w-full h-full object-contain" alt='Imagens do anúncio'/>}
              <div className="text-right mt-2 absolute top-1 right-1 text-white bg-slate-900 text-sm rounded bg-opacity-40 p-1">
                {currentIndex + 1}/{images.length}
              </div>
            
              <button 
                className="MAIN-IMG-PREV-BTN absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 font-bold text-slate-900 opacity-40 text-3xl disabled:opacity-20" 
                onClick={handlePrevious} 
                disabled={currentIndex === 0}
              >
                &lt;
              </button>
              <button 
                className="MAIN-IMG-NEXT-BTN absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 font-bold text-slate-900 opacity-40 text-3xl disabled:opacity-20" 
                onClick={handleNext} 
                disabled={currentIndex === images.length - 1}
              >
                &gt;
              </button>
            </div>

            <div className="TAB-GALERIA relative md:w-[650px] w[300px]">
              <button 
                className="TAB-GALERIA-PREV-BTN absolute left-0 top-1/2 transform -translate-y-1/2 px-2 py-1 py-2 bg-gray-500 text-white rounded bg-opacity-70" 
                onClick={() => scrollGallery('left')}
              >
                &lt;
              </button>

              <div ref={galleryRef} className="TAB-GALERIA-IMGS flex overflow-hidden">
                {images.map((imagem, index) => (
                  <div key={index} className={`h-20 w-20 flex-shrink-0 overflow-hidden mx-1 ${currentIndex === index ? 'selected' : ''}`}>
                    <img src={imagem} alt={`Imagens do imóvel`} className="h-full w-full object-cover cursor-pointer" onClick={() => handleImageClick(index)} />
                  </div>
                ))}
              </div>

              <button 
                className="TAB-GALERIA-NEXT-BTN absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-1 py-2 bg-gray-500 text-white rounded bg-opacity-70" 
                onClick={() => scrollGallery('right')}
              >
                &gt;
              </button>
            </div>
            
          </div>
        </div>

        <div className="INFOS md:my-5 my-2 p-10 mx-2 md:mr-2 flex flex-col items-start rounded h-full bg-neutral-100">
          <div className="TITULO-LOCALIZACAO flex justify-between gap-2 mb-2 w-full">

            <div className="flex flex-col gap-1">
            <div>
              <h1 className="TITULO text-xl text-gray-900">T2 duplex 2° andar (Ref. TF2)</h1>
             
            </div>
            <div className="mt-1 mb-2">
              <a href='https://maps.app.goo.gl/zUnYRWgjCwiiHC5c9'target='_blank' rel="noreferrer" className="text-red-600 underline flex gap-1">
                <FaLocationDot />
                <div className="LOCALIZACAO-LINK text-sm">Travessa do Forno, Covilhã</div>
              </a>
            </div>
            </div>

            <div>
            <h2 className="VALOR-RENDA font-bold text-2xl mb-2 text-gray-900">550€</h2>
            </div>
          </div>

          <div className="TAGS flex flex-wrap gap-1 mb-4">
             
            <div className={'uppercase text-xs font-medium rounded-md px-2 py-1 bg-green-600 text-white'}>
              Disponível
            </div>
            
            <div className="uppercase inline-block py-1 px-2 rounded bg-red-400 text-white text-xs font-medium tracking-widest">
              T2
            </div>
            
            
            <div className="uppercase text-xs bg-red-400 text-white font-medium rounded-md px-2 py-1">
              Não fumadores
            </div>
        

              <div className={`uppercase text-xs font-medium rounded-md px-2 py-1 bg-red-400 text-white`}>
                Wifi
              </div>
 
              <div className={`uppercase text-xs font-medium rounded-md px-2 py-1 bg-red-400 text-white`}>
                Limpeza Quinzenal
              </div>
          </div>

          <div className="DESCRICAO flex flex-col items-start mb-3">
            <h3 className="text-gray-900 font-medium text-xl mb-1 tracking-wide title-font">DESCRIÇÃO</h3>
            <p className="text-gray-900 font-normal text-wrap">
              A 500 metros do polo principal, a 200 metros da Câmara Municipal.
              <br />
              Wifi de cortesia e limpeza quinzenal de manutenção
              </p>
              <br />
              <p className="text-sm font-semibold">*Visitas mediante marcação.</p>
          </div>
          
          <div className="CARACTERISTICAS w-full mb-5 border-t pt-2">
                        
              <div className="grid md:grid-cols-[3fr_1fr] grid-cols-2">
                <div className="grid grid-cols-1 gap-1">
                  <div className="font-light text-gray-800 flex items-center gap-2">
                    <FaBed />
                    Tipologia 
                  </div>

                  <div className="font-light text-gray-800 flex items-center gap-2 ">
                    <FaFaucet />
                    Despesas
                  </div>

                  <div className="font-light text-gray-800 flex items-center gap-2 ">
                    <FaCat />
                    Animais
                  </div>

                  <div className="font-light text-gray-800 flex items-center gap-2 ">
                    <FaPeopleRoof />
                    Lotação máx.
                  </div>

                  <div className="font-light text-gray-800 flex items-center gap-2 ">
                    <FaCalendarAlt />
                    Disponibilidade
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <div className="font-bold text-gray-900 mb-1">T2</div>
                  <div className="font-bold  text-gray-900 mb-1">Não incluidas</div>
                  <div className="font-bold text-gray-900 mb-1">Não Permitido</div>
                  <div className="font-bold text-gray-900 mb-1">4 pessoas</div>
                  <div className="font-bold text-gray-900 mb-1">08/06/2024</div>
                </div>
              </div>
              
          </div>
          


          <div className="CONDICOES_CONTRATO flex flex-col items-start mt-1 ">
            <h3 className="mb-2 text-gray-900 font-medium text-xl tracking-wide title-font">CONDIÇÕES CONTRATUAIS</h3>

              <div className="flex flex-col gap-1">
              <div className="flex gap-2">
              <div className={`uppercase text-xs font-medium rounded-md px-2 py-1 bg-green-600 text-white`}>
                Fiador
              </div>
              <div className={`uppercase text-xs font-medium rounded-md px-2 py-1 bg-red-400 text-white`}>
                Caução: 1000€
              </div>
              </div>
                <div className="flex gap-2 mt-2">
                <div className="text-sm font-bold uppercase">Prazo:</div>
                <div className="text-sm">Até 31 de agosto de 2025</div>
                </div>
              </div>

              <div className="mt-1 flex flex-col px-4">
                <ul className="list-disc text-sm">
                  <li>Contrato renovável por períodos de 12 meses.</li>
                  <li>Caso não tenha fiador é possível prosseguir com o arrendamento no entanto necessitamos de mais garantias.</li>
                  <li>Não se efectuam reservas para data futura.</li>
                  <li>Apartamento só se considera reservado após pagamento da caução.</li>
                </ul>                 
              </div>
          </div>        
      </div>
    </div>
  )
}

export default Anuncio