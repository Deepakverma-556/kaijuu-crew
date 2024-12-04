import React, { useState, useRef } from 'react';
import BackgroundImage from '../assets/images/webp/footer-bg-image.webp';

const AccordionItem = ({ handleToggle, active, faq }) => {
  const contentEl = useRef();
  const { title, id, content } = faq;

  return (
    <div className="accordion-card faq-bg backdrop-blur-[35px] rounded-[10px] border border-white border-opacity-25 overflow-hidden">
      <div className="rc-accordion-header pt-[21px] pb-[14px] px-8 max-md:p-4">
        <div role="button" aria-expanded={active === id} aria-controls={`content-${id}`}
          className={`rc-accordion-toggle flex items-center cursor-pointer justify-between p-0 transition-[0.3s] ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}>
          <p className="font-oswald font-bold text-[22px] leading-[33px] text-white max-md:text-xl max-md:leading-6 max-sm:text-base max-sm:leading-5">{title}</p>
          <div className={`transition-transform duration-500 ${active === id ? 'rotate-180' : 'rotate-0'}`}>
            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.63729 0L5.5 4.82292L1.36271 0L0 1.58854L5.5 8L11 1.58854L9.63729 0Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
      <div id={`content-${title}`} ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={{
        height: active === id ? `${contentEl.current.scrollHeight}px` : '0px',
        transition: 'height 0.3s ease-out',
      }}
      >
        <p className="font-oswald font-normal text-[22px] leading-[33px] text-white pt-[20px] pb-[31px] max-md:p-4 max-sm:py-3 max-w-[751px] px-8 max-md:text-xl max-md:leading-6 max-sm:text-base max-sm:leading-5">{content}</p>
      </div>
    </div>
  );
};

const Faqs = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (title) => {
    setActive((prev) => (prev === title ? null : title));
  };

  const faqData = [
    {
      id: 1,
      title: 'Volutpat gravida sapien in purus',
      content: 'Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.',
    },
    {
      id: 2,
      title: 'Volutpat gravida sapien in purus',
      content: 'Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.',
    },
    {
      id: 3,
      title: 'Volutpat gravida sapien in purus',
      content: 'Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.',
    },
    {
      id: 4,
      title: 'Volutpat gravida sapien in purus',
      content: 'Ac pretium feugiat sed id ut viverra nunc lacus, pulvinar purus malesuada adipiscing nisl nullam mi diam sit nisi consectetur non etiam diam.',
    },
  ];

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="bg-no-repeat overflow-hidden bg-cover bg-center pt-[106px] pb-[60px] max-lg:pt-16 max-lg:pb-16 max-md:pt-10 max-md:pb-10" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className='max-w-[1320px] mx-auto px-4 '>
        <div className="max-w-[830px] mx-auto pb-[120px] max-lg:pb-16 max-md:pb-10">
          <p className="text-[72px] font-normal font-godzilla text-dark-red leading-[62.4px] max-lg:text-[48px] max-lg:leading-4 max-md:text-3xl max-md:leading-none text-center pb-[55px] max-md:pb-10 max-sm:pb-5">
            Faq<span className="text-[40px] max-lg:text-2xl max-md:text-xl text-white leading-[34.7px]">s</span>
          </p>
          <div className="">
            <div className="flex flex-col gap-[17px]">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} active={active} handleToggle={handleToggle} faq={faq} />
              ))}
            </div>
          </div>
        </div>
        <div className=' text-center pt-[72px] max-lg:pt-10  footer-gradient'>
          <a href="#" className="text-4xl font-normal font-godzilla text-dark-red leading-[36px] max-lg:leading-4 max-md:text-3xl max-md:leading-none text-center pb-[55px]">
            Kaijuu<span className="text-white">Crew</span>
          </a>
          <div className='flex items-center gap-6 justify-center pt-7 max-sm:pt-3'>
            <a href="https://x.com/i/flow/login?lang=en" target='_blank' className='hover:scale-110 transition-all duration-300'> <svg className='max-sm:w-[35px] max-sm:h-[35px]' width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5 0C9.17924 0 0 9.17924 0 20.5C0 31.8208 9.17924 41 20.5 41C31.8208 41 41 31.8208 41 20.5C41 9.17924 31.8208 0 20.5 0ZM30.3519 15.4528C30.3656 15.6679 30.3656 15.8921 30.3656 16.1117C30.3656 22.8291 25.2498 30.567 15.9012 30.567C13.0184 30.567 10.3461 29.7296 8.09475 28.2882C8.50658 28.3339 8.90011 28.3522 9.32109 28.3522C11.7006 28.3522 13.8878 27.5469 15.6313 26.1833C13.3982 26.1375 11.5221 24.6732 10.8815 22.6598C11.664 22.7742 12.3686 22.7742 13.174 22.5683C12.0242 22.3347 10.9907 21.7102 10.2492 20.801C9.5076 19.8918 9.10368 18.7539 9.10603 17.5806V17.5165C9.77868 17.8963 10.5703 18.1297 11.3985 18.1617C10.7023 17.6977 10.1313 17.069 9.73618 16.3315C9.34106 15.594 9.13405 14.7703 9.13348 13.9336C9.13348 12.9864 9.38058 12.1215 9.82444 11.3711C11.1007 12.9422 12.6932 14.2271 14.4986 15.1424C16.3039 16.0577 18.2816 16.5828 20.3032 16.6837C19.5848 13.2289 22.1656 10.433 25.2681 10.433C26.7324 10.433 28.0502 11.0462 28.9791 12.0346C30.1277 11.8195 31.2259 11.3894 32.2051 10.8128C31.8253 11.9888 31.0291 12.9818 29.9721 13.6087C30.9971 13.4989 31.9855 13.2152 32.9007 12.8171C32.2097 13.8329 31.3449 14.7344 30.3519 15.4528Z" fill="white" />
            </svg></a>
            <a href="https://discord.com/" target='_blank' className='hover:scale-110 transition-all duration-300'><svg className='max-sm:w-[35px] max-sm:h-[35px]' width="52" height="41" viewBox="0 0 52 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.2487 0.259229C14.8129 0.784432 12.4203 1.52856 10.0492 2.49846C7.88831 3.38241 7.95617 3.34106 7.49297 4.05593C6.67653 5.31607 5.49329 7.43914 4.7 9.06731C2.23586 14.1247 0.832934 18.9628 0.190794 24.6175C0.0078186 26.2288 -0.0628282 30.7298 0.0649094 32.6384C0.155765 33.9959 0.1801 34.136 0.349181 34.2771C0.816851 34.6667 3.25649 36.3141 4.27772 36.9297C5.75003 37.8172 8.29762 39.1014 9.83872 39.7328C11.4088 40.3761 13.2708 41.0234 13.3692 40.9601C13.595 40.815 15.3557 37.9197 15.8982 36.8014L16.1464 36.29L15.7503 36.1345C14.6873 35.717 11.7694 34.2087 11.7788 34.0814C11.7859 33.9851 12.8087 33.248 12.9003 33.2733C12.9532 33.2878 13.3563 33.4592 13.7963 33.6542C16.4428 34.827 19.8166 35.7348 22.9324 36.1125C24.3374 36.2828 28.0473 36.2543 29.5004 36.062C32.5347 35.6604 35.4599 34.8447 38.2022 33.6357L39.1634 33.2118L39.6368 33.6129C39.8971 33.8336 40.1101 34.0563 40.1101 34.1078C40.1101 34.2308 37.643 35.5326 36.5993 35.9603L35.7832 36.2948L36.0002 36.742C36.5833 37.9434 38.4771 41 38.6383 41C38.7703 41 41.243 40.0935 42.2253 39.6851C45.242 38.4307 48.1485 36.7867 50.9766 34.7353C51.891 34.0721 51.809 34.3387 51.9455 31.5823C52.3568 23.269 50.4345 14.8576 46.4196 7.40278C45.707 6.07974 44.2465 3.66722 44.0486 3.48631C43.7093 3.1761 40.6349 1.93164 38.7207 1.3297C37.0541 0.805544 33.7996 0 33.3488 0C33.2568 0 31.9844 2.61279 31.9844 2.80184C31.9844 2.87648 31.8986 2.89462 31.7107 2.85984C30.3016 2.59894 28.7386 2.50144 25.9638 2.50144C23.2043 2.50144 21.4842 2.60981 20.2863 2.85905C20.0684 2.90443 20.037 2.85616 19.3699 1.45296C18.8605 0.381528 18.6406 0.00183919 18.5323 0.0070956C18.4515 0.0110379 17.8739 0.124489 17.2487 0.259229ZM18.1966 17.2119C19.3389 17.4636 20.4136 18.2306 21.0753 19.2662C23.0934 22.4246 21.6769 26.9196 18.3819 27.8125C16.907 28.2121 15.359 27.7381 14.2116 26.5351C13.6489 25.9452 13.0711 24.9447 12.8765 24.2233C12.1773 21.6312 13.2312 18.7965 15.3184 17.6553C16.2913 17.1235 17.1768 16.987 18.1966 17.2119ZM36.0065 17.3553C37.0771 17.7232 38.0977 18.6575 38.6666 19.7902C39.0612 20.576 39.2221 21.1861 39.2811 22.1207C39.3903 23.8513 38.8505 25.38 37.7182 26.5468C36.7753 27.5185 35.8329 27.9456 34.6368 27.9434C33.3778 27.9411 32.499 27.5372 31.5167 26.5097C30.7512 25.7088 30.3196 24.9142 30.0845 23.8729C29.9182 23.1364 29.9617 21.4861 30.1649 20.8259C30.7299 18.9898 32.2732 17.4558 33.8369 17.1761C34.47 17.0629 35.3728 17.1374 36.0065 17.3553Z" fill="white" />
            </svg></a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' className='hover:scale-110 transition-all duration-300'> <svg className='max-sm:w-[35px] max-sm:h-[35px]' width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.4945 13.6638C16.7303 13.6638 13.6584 16.7357 13.6584 20.5C13.6584 24.2643 16.7303 27.3362 20.4945 27.3362C24.2587 27.3362 27.3306 24.2643 27.3306 20.5C27.3306 16.7357 24.2587 13.6638 20.4945 13.6638ZM40.9977 20.5C40.9977 17.6691 41.0234 14.8638 40.8644 12.038C40.7054 8.75582 39.9567 5.84285 37.5566 3.44273C35.1514 1.03747 32.2436 0.293848 28.9614 0.134865C26.1306 -0.024117 23.3253 0.00152543 20.4996 0.00152543C17.6688 0.00152543 14.8635 -0.024117 12.0378 0.134865C8.75565 0.293848 5.84274 1.0426 3.44266 3.44273C1.03746 5.84798 0.293842 8.75582 0.134863 12.038C-0.0241165 14.8689 0.0015254 17.6742 0.0015254 20.5C0.0015254 23.3258 -0.0241165 26.1362 0.134863 28.962C0.293842 32.2442 1.04258 35.1572 3.44266 37.5573C5.84787 39.9625 8.75565 40.7062 12.0378 40.8651C14.8687 41.0241 17.6739 40.9985 20.4996 40.9985C23.3305 40.9985 26.1357 41.0241 28.9614 40.8651C32.2436 40.7062 35.1565 39.9574 37.5566 37.5573C39.9618 35.152 40.7054 32.2442 40.8644 28.962C41.0285 26.1362 40.9977 23.3309 40.9977 20.5ZM20.4945 31.0185C14.6738 31.0185 9.9762 26.3208 9.9762 20.5C9.9762 14.6792 14.6738 9.98152 20.4945 9.98152C26.3152 9.98152 31.0128 14.6792 31.0128 20.5C31.0128 26.3208 26.3152 31.0185 20.4945 31.0185ZM31.4436 12.0073C30.0845 12.0073 28.9871 10.9098 28.9871 9.55073C28.9871 8.19168 30.0845 7.09419 31.4436 7.09419C32.8026 7.09419 33.9001 8.19168 33.9001 9.55073C33.9005 9.87344 33.8372 10.1931 33.7139 10.4913C33.5906 10.7895 33.4096 11.0605 33.1815 11.2887C32.9533 11.5169 32.6823 11.6978 32.3841 11.8211C32.0859 11.9444 31.7663 12.0077 31.4436 12.0073Z" fill="white" />
            </svg></a>
            <a href="https://opensea.io/" target='_blank' className='hover:scale-110 transition-all duration-300'> <svg className='max-sm:w-[35px] max-sm:h-[35px]' width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.4464 0.104455C10.4331 0.923413 3.60794 6.38344 1.05881 14.0145C-0.957652 20.0508 -0.0646771 26.6321 3.48783 31.9179C6.02715 35.6961 9.71219 38.506 14.0101 39.9413C20.0472 41.9575 26.6293 41.0647 31.9158 37.5126C35.6945 34.9736 38.5047 31.2891 39.9402 26.9917C41.9565 20.9562 41.0678 14.4006 37.513 9.08517C33.3237 2.82112 25.932 -0.66056 18.4464 0.104455ZM21.9474 8.46134C22.254 8.7249 22.2698 8.78956 22.3245 9.99331L22.3815 11.2502L22.8802 11.6108C23.7166 12.2156 25.2753 13.7778 26.0052 14.7426C27.4167 16.6089 27.8702 18.2517 27.393 19.7689C27.1081 20.674 26.266 21.9201 25.1619 23.0701L24.232 24.0385H23.2782H22.3245V25.122V26.2054H23.7577C24.5838 26.2054 25.2965 26.1517 25.4401 26.0786C25.5771 26.0089 26.0532 25.5949 26.498 25.1587L27.3067 24.3655L30.4275 23.4607C32.1439 22.9631 33.6406 22.5559 33.7534 22.5559C33.9323 22.5559 33.9586 22.6632 33.9586 23.394V24.232L33.4744 24.4489C33.2081 24.5682 32.69 24.8656 32.3233 25.1099C31.7359 25.501 31.5031 25.7866 30.3714 27.5048C29.0571 29.5 28.4287 30.2069 27.554 30.6736L27.058 30.9383L20.8531 30.9705C14.9488 31.0013 14.6041 30.9917 13.7387 30.7729C11.8221 30.2883 10.2014 28.9803 9.33135 27.2162C8.83861 26.2168 8.48799 24.8529 8.54604 24.1611L8.58026 23.7534L11.7428 23.7231L14.9053 23.6927L14.9576 23.9512C14.9863 24.0933 15.0364 24.4068 15.0688 24.6479C15.1424 25.1945 15.5737 25.773 16.0905 26.0182C16.402 26.166 16.8469 26.2054 18.207 26.2054H19.9292V25.122V24.0385H18.3894C16.5975 24.0385 16.6051 24.0454 17.2888 23.0344C17.9872 22.0018 18.6533 20.7195 18.9607 19.8157C19.6473 17.7978 19.1157 14.8598 17.4205 11.3015C17.0563 10.5373 16.7819 9.88861 16.8106 9.85987C16.8392 9.83125 17.5142 9.98156 18.3104 10.194C19.1066 10.4065 19.7967 10.5805 19.8437 10.5808C19.8907 10.581 19.931 10.2349 19.9332 9.8114C19.9355 9.38795 20.0053 8.919 20.0884 8.76903C20.4317 8.14977 21.3988 7.98976 21.9474 8.46134ZM16.3922 13.9728C17.0232 15.7069 17.2205 16.5998 17.2308 17.7661C17.2412 18.9371 17.1496 19.2343 16.2907 20.8187L15.9034 21.5333L12.9832 21.503C10.392 21.4759 10.0645 21.452 10.0759 21.2905C10.087 21.1355 12.1022 17.9183 14.8882 13.608C15.622 12.4726 15.6225 12.4721 15.8256 12.7229C15.9372 12.8607 16.1923 13.4233 16.3922 13.9728Z" fill="white" />
            </svg></a>
          </div>
          <p className='text-white font-oswald text-[22px] leading-[33px] pt-7 max-sm:pt-3 max-md:text-xl max-sm:text-base'>Copyright © Kaijuu Crew {getCurrentYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
