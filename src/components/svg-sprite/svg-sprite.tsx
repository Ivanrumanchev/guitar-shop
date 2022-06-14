function SvgSprite(): JSX.Element {
  return (
    <div className="visually-hidden" data-testid="svg-sprite">
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <symbol id="icon-arrow-up" viewBox="0 0 9 16">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.307488 5.31736C0.249284 5.2593 0.203105 5.19033 0.171597 5.1144C0.140089 5.03847 0.123871 4.95707 0.123871 4.87486C0.123871 4.79265 0.140089 4.71125 0.171597 4.63532C0.203105 4.55939 0.249284 4.49042 0.307488 4.43236L4.05749 0.682359C4.11555 0.624155 4.18452 0.577977 4.26045 0.546469C4.33638 0.514961 4.41778 0.498742 4.49999 0.498742C4.5822 0.498742 4.6636 0.514961 4.73953 0.546469C4.81546 0.577977 4.88443 0.624155 4.94249 0.682359L8.69249 4.43236C8.80985 4.54972 8.87578 4.70889 8.87578 4.87486C8.87578 5.04083 8.80985 5.2 8.69249 5.31736C8.57513 5.43472 8.41596 5.50065 8.24999 5.50065C8.08402 5.50065 7.92485 5.43472 7.80749 5.31736L4.49999 2.00861L1.19249 5.31736C1.13443 5.37556 1.06546 5.42174 0.98953 5.45325C0.913599 5.48476 0.832197 5.50098 0.749988 5.50098C0.667779 5.50098 0.586377 5.48476 0.510446 5.45325C0.434514 5.42174 0.365545 5.37556 0.307488 5.31736Z" fill="currentcolor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M4.5 15.5C4.33424 15.5 4.17527 15.4342 4.05806 15.3169C3.94085 15.1997 3.875 15.0408 3.875 14.875L3.875 1.75C3.875 1.58424 3.94085 1.42527 4.05806 1.30806C4.17527 1.19085 4.33424 1.125 4.5 1.125C4.66576 1.125 4.82473 1.19085 4.94194 1.30806C5.05915 1.42527 5.125 1.58424 5.125 1.75L5.125 14.875C5.125 15.0408 5.05915 15.1997 4.94194 15.3169C4.82473 15.4342 4.66576 15.5 4.5 15.5Z" fill="currentcolor" />
        </symbol>

        <symbol id="icon-basket" viewBox="0 0 14 14">
          <path d="M13.8657 4.67725C13.8151 4.6074 13.7524 4.55132 13.6818 4.51287C13.6113 4.47442 13.5345 4.45451 13.4568 4.45452H10.2286V1.90908C10.2286 1.40276 10.0585 0.917179 9.75585 0.559157C9.45315 0.201135 9.0426 0 8.61452 0H5.38636C4.95828 0 4.54773 0.201135 4.24503 0.559157C3.94233 0.917179 3.77228 1.40276 3.77228 1.90908V4.45452H0.544119C0.46613 4.45347 0.388881 4.4725 0.317725 4.51027C0.246569 4.54804 0.183207 4.60366 0.132029 4.67327C0.0808507 4.74288 0.0430804 4.82482 0.0213348 4.91341C-0.000410723 5.00201 -0.00561161 5.09513 0.00609251 5.18633L1.01758 12.9181C1.05649 13.2216 1.18683 13.4982 1.38457 13.697C1.58231 13.8958 1.83413 14.0034 2.09364 13.9999H11.918C12.1775 14.0034 12.4293 13.8958 12.6271 13.697C12.8248 13.4982 12.9551 13.2216 12.9941 12.9181L13.9948 5.18633C14.0056 5.09548 13.9996 5.00295 13.9773 4.91508C13.955 4.82721 13.9169 4.74608 13.8657 4.67725ZM4.84833 1.90908C4.84833 1.74031 4.90502 1.57845 5.00592 1.45911C5.10682 1.33976 5.24366 1.27272 5.38636 1.27272H8.61452C8.75721 1.27272 8.89406 1.33976 8.99496 1.45911C9.09586 1.57845 9.15254 1.74031 9.15254 1.90908V4.45452H4.84833V1.90908ZM11.918 12.7272H2.08288L1.17361 5.72724H12.8273L11.918 12.7272Z" fill="currentcolor" />
        </symbol>

        <symbol id="icon-clock" viewBox="0 0 10 10">
          <path d="M5 0.625C2.58398 0.625 0.625 2.58398 0.625 5C0.625 7.41602 2.58398 9.375 5 9.375C7.41602 9.375 9.375 7.41602 9.375 5C9.375 2.58398 7.41602 0.625 5 0.625ZM6.72363 6.34473L6.44434 6.72559C6.43826 6.73388 6.43061 6.74089 6.42181 6.74622C6.41302 6.75154 6.40326 6.75508 6.3931 6.75662C6.38294 6.75816 6.37257 6.75768 6.36259 6.75521C6.35261 6.75273 6.34322 6.7483 6.33496 6.74219L4.71973 5.56445C4.70966 5.55723 4.70148 5.54769 4.69588 5.53664C4.69027 5.5256 4.6874 5.51336 4.6875 5.50098V2.8125C4.6875 2.76953 4.72266 2.73438 4.76562 2.73438H5.23535C5.27832 2.73438 5.31348 2.76953 5.31348 2.8125V5.22949L6.70605 6.23633C6.74121 6.26074 6.74902 6.30957 6.72363 6.34473Z" fill="white" />
        </symbol>

        <symbol id="icon-close" viewBox="0 0 14 14">
          <path d="M12.3001 13.4833L7.00006 8.175L1.70006 13.4833L0.516724 12.3L5.82506 7L0.516724 1.7L1.70006 0.516663L7.00006 5.825L12.3001 0.524996L13.4751 1.7L8.17506 7L13.4751 12.3L12.3001 13.4833Z" fill="currentColor" />
        </symbol>

        <symbol id="icon-full-star" viewBox="0 0 14 12">
          <path d="M12.0902 4.13787L8.97645 3.70544L7.58451 1.00895C7.54649 0.935124 7.48394 0.875359 7.40668 0.83903C7.21291 0.747624 6.97745 0.823796 6.88056 1.00895L5.48862 3.70544L2.37484 4.13787C2.289 4.14959 2.21051 4.18826 2.15041 4.24685C2.07777 4.3182 2.03773 4.4142 2.03911 4.51374C2.04049 4.61328 2.08317 4.70822 2.15777 4.77771L4.41063 6.87654L3.87838 9.84022C3.8659 9.90917 3.87389 9.98007 3.90143 10.0449C3.92897 10.1097 3.97498 10.1659 4.03422 10.207C4.09346 10.2481 4.16358 10.2725 4.23661 10.2775C4.30964 10.2825 4.38268 10.2678 4.44743 10.2351L7.23254 8.83593L10.0176 10.2351C10.0937 10.2738 10.182 10.2867 10.2666 10.2726C10.48 10.2375 10.6235 10.0441 10.5867 9.84022L10.0544 6.87654L12.3073 4.77771C12.3686 4.72029 12.4091 4.64529 12.4214 4.56326C12.4545 4.35818 12.3048 4.16834 12.0902 4.13787Z" fill="#C90606" />
        </symbol>

        <symbol id="icon-minus" viewBox="0 0 9 1">
          <line x1="8.58536" y1="0.5" x2="0.780479" y2="0.5" stroke="currentcolor" />
        </symbol>

        <symbol id="icon-phone" viewBox="0 0 8 8">
          <path d="M7.53625 6.14136L5.8425 4.60136C5.76243 4.52859 5.65722 4.48978 5.54908 4.49312C5.44094 4.49647 5.33833 4.5417 5.26291 4.61928L4.26583 5.64469C4.02583 5.59886 3.54333 5.44844 3.04666 4.95303C2.55 4.45594 2.39958 3.97219 2.355 3.73386L3.37958 2.73636C3.45725 2.661 3.50255 2.55837 3.5059 2.4502C3.50924 2.34202 3.47036 2.23679 3.3975 2.15678L1.85791 0.463443C1.78501 0.383175 1.6837 0.334486 1.57548 0.327718C1.46726 0.320949 1.36066 0.356634 1.27833 0.427193L0.374162 1.20261C0.302125 1.27491 0.259129 1.37113 0.253329 1.47303C0.247079 1.57719 0.127912 4.04469 2.04125 5.95886C3.71041 7.62761 5.80125 7.74969 6.37708 7.74969C6.46125 7.74969 6.51291 7.74719 6.52666 7.74636C6.62854 7.74066 6.72472 7.69747 6.79666 7.62511L7.57166 6.72053C7.6425 6.63846 7.67845 6.53195 7.67183 6.42373C7.66522 6.31552 7.61656 6.21419 7.53625 6.14136Z" fill="white" />
        </symbol>

        <symbol id="icon-pinterest" viewBox="0 0 24 24">
          <path d="M12 0.960022C5.90845 0.960022 0.959991 5.90848 0.959991 12C0.959991 18.0916 5.90845 23.04 12 23.04C18.0915 23.04 23.04 18.0916 23.04 12C23.04 5.90848 18.0915 0.960022 12 0.960022ZM12 1.92002C17.5727 1.92002 22.08 6.42731 22.08 12C22.08 17.5727 17.5727 22.08 12 22.08C10.9806 22.08 9.99729 21.9275 9.0703 21.6469C9.48322 20.9565 10.0163 19.9697 10.2281 19.155C10.3539 18.672 10.8712 16.7016 10.8712 16.7016C11.2074 17.3434 12.1897 17.8866 13.2356 17.8866C16.3479 17.8866 18.5916 15.0243 18.5916 11.4675C18.5916 8.05756 15.809 5.5069 12.2287 5.5069C7.77447 5.5069 5.4103 8.49642 5.4103 11.7516C5.4103 13.2654 6.21547 15.1499 7.50468 15.75C7.69996 15.8409 7.80483 15.8015 7.84968 15.6122C7.88421 15.4685 8.05836 14.7681 8.13655 14.4422C8.16156 14.3382 8.14945 14.2484 8.0653 14.146C7.63861 13.6284 7.29655 12.6777 7.29655 11.791C7.29655 9.5146 9.01989 7.31158 11.9559 7.31158C14.4911 7.31158 16.2666 9.0398 16.2666 11.5106C16.2666 14.3022 14.857 16.2366 13.0228 16.2366C12.0099 16.2366 11.2514 15.3986 11.4947 14.371C11.7864 13.1445 12.3497 11.821 12.3497 10.935C12.3497 10.1428 11.9245 9.4819 11.0437 9.4819C10.0082 9.4819 9.17624 10.5526 9.17624 11.9878C9.17624 12.9012 9.48562 13.5197 9.48562 13.5197C9.48562 13.5197 8.46265 17.8447 8.2753 18.6497C8.08755 19.4541 8.13784 20.5375 8.2153 21.3441C4.52214 19.8492 1.91999 16.2333 1.91999 12C1.91999 6.42731 6.42728 1.92002 12 1.92002Z" fill="currentColor" />
        </symbol>

        <symbol id="icon-plus" viewBox="0 0 9 8">
          <line x1="8.2439" y1="4.11829" x2="0.439018" y2="4.11829" stroke="currentcolor" />
          <line x1="4.1785" y1="8" x2="4.1785" stroke="currentcolor" />
        </symbol>

        <symbol id="icon-search" viewBox="0 0 14 15">
          <path fillRule="evenodd" clipRule="evenodd" d="M10.0276 9.52893L13.7934 13.2948C13.9257 13.4273 14.0001 13.6069 14 13.7942C13.9999 13.9814 13.9255 14.161 13.793 14.2934C13.6606 14.4257 13.481 14.5001 13.2937 14.5C13.1064 14.4999 12.9269 14.4255 12.7945 14.293L9.0287 10.5271C7.90295 11.3991 6.48731 11.8094 5.06977 11.6746C3.65223 11.5399 2.33927 10.8701 1.39799 9.80165C0.456712 8.73318 -0.0421836 7.34624 0.0027973 5.92299C0.0477782 4.49973 0.633257 3.14707 1.64013 2.14017C2.647 1.13327 3.99963 0.547779 5.42285 0.502797C6.84607 0.457815 8.23297 0.956724 9.30142 1.89803C10.3699 2.83933 11.0396 4.15233 11.1743 5.5699C11.3091 6.98748 10.8988 8.40315 10.0269 9.52893H10.0276ZM5.60026 10.2996C6.71412 10.2996 7.78235 9.85712 8.56997 9.06948C9.35759 8.28185 9.80007 7.21358 9.80007 6.0997C9.80007 4.98581 9.35759 3.91755 8.56997 3.12992C7.78235 2.34228 6.71412 1.89979 5.60026 1.89979C4.4864 1.89979 3.41817 2.34228 2.63055 3.12992C1.84293 3.91755 1.40046 4.98581 1.40046 6.0997C1.40046 7.21358 1.84293 8.28185 2.63055 9.06948C3.41817 9.85712 4.4864 10.2996 5.60026 10.2996Z" fill="currentcolor" />
        </symbol>

        <symbol id="icon-skype" viewBox="0 0 24 23">
          <path d="M6.855 0C3.08063 0 0 2.90734 0 6.48313C0 7.61336 0.33 8.66094 0.87 9.58813C0.73875 10.2458 0.66 10.9232 0.66 11.615C0.66 17.604 5.79562 22.4538 12.12 22.4538C12.78 22.4538 13.4231 22.398 14.055 22.2956C14.9831 22.743 16.0331 23 17.145 23C20.9194 23 24 20.0945 24 16.5169C24 15.543 23.7506 14.6302 23.34 13.8C23.4956 13.0902 23.595 12.3643 23.595 11.615C23.595 5.62961 18.4463 0.77625 12.12 0.77625C11.5144 0.77625 10.9181 0.83375 10.335 0.92C9.31312 0.346797 8.13 0 6.855 0ZM6.855 0.92C8.01188 0.92 9.0825 1.22727 9.99 1.76813C10.0875 1.82922 10.2037 1.85438 10.32 1.84C10.9069 1.74477 11.5069 1.69625 12.12 1.69625C17.9344 1.69625 22.635 6.13453 22.635 11.615C22.635 12.3463 22.5562 13.0561 22.395 13.7425C22.365 13.8485 22.3762 13.9599 22.425 14.0588C22.8188 14.8009 23.04 15.6274 23.04 16.5169C23.04 19.5913 20.4094 22.08 17.145 22.08C16.1344 22.08 15.1819 21.8392 14.355 21.4188C14.2631 21.3738 14.1581 21.3577 14.055 21.3756C13.4288 21.4852 12.7781 21.5338 12.12 21.5338C6.30562 21.5338 1.62 17.1009 1.62 11.615C1.62 10.9322 1.69125 10.262 1.83 9.61688C1.85437 9.50367 1.83187 9.38508 1.77 9.28625C1.25437 8.45969 0.96 7.51094 0.96 6.48313C0.96 3.41227 3.5925 0.92 6.855 0.92ZM12.045 3.8525C10.7812 3.8525 9.645 4.01602 8.67 4.35563C8.66625 4.35742 8.65875 4.35383 8.655 4.35563C7.67062 4.70062 6.86812 5.22531 6.315 5.90812C5.75625 6.59453 5.46 7.4157 5.46 8.29438C5.46 9.20359 5.73937 10.0212 6.285 10.6663C6.80625 11.2808 7.50375 11.7623 8.355 12.1038C9.165 12.429 10.1644 12.7021 11.325 12.9375C12.1556 13.1028 12.8287 13.2573 13.305 13.3975C13.7269 13.5215 14.0588 13.7066 14.295 13.915C14.4862 14.0839 14.565 14.251 14.565 14.5619C14.565 14.9284 14.4094 15.171 13.95 15.4675C13.4925 15.764 12.8569 15.9419 12.015 15.9419C11.3981 15.9419 10.9237 15.8484 10.62 15.7119C10.2806 15.5609 10.0275 15.3777 9.87 15.18C9.67313 14.9356 9.48375 14.614 9.3 14.2169C9.105 13.7838 8.85187 13.4173 8.52 13.1531C8.1675 12.8728 7.71562 12.7362 7.245 12.7362C6.68813 12.7362 6.16687 12.907 5.775 13.2537C5.38875 13.5988 5.16 14.0767 5.16 14.5763C5.16 15.3004 5.44312 16.0263 5.955 16.7181C6.45937 17.4081 7.13437 17.9634 7.935 18.3713C9.05812 18.9355 10.455 19.205 12.09 19.205C13.4531 19.205 14.67 19.0073 15.705 18.6012C16.7456 18.1934 17.58 17.6094 18.15 16.8475C18.7162 16.0892 19.0031 15.2034 19.005 14.26C19.005 13.482 18.8419 12.7866 18.495 12.2044C18.1594 11.642 17.685 11.1712 17.1 10.81C16.5394 10.465 15.8681 10.1793 15.105 9.9475C14.3681 9.72469 13.5413 9.51266 12.645 9.32938C12.6375 9.32758 12.6375 9.33117 12.63 9.32938C11.94 9.17844 11.4338 9.05984 11.145 8.98438C10.8806 8.9143 10.5994 8.82086 10.335 8.69688C10.1044 8.58727 9.94687 8.45789 9.84 8.3375C9.75937 8.24406 9.735 8.18297 9.735 8.03563C9.735 7.8182 9.82125 7.65109 10.2 7.4175C10.5712 7.1857 11.1094 7.05813 11.835 7.05813C12.6281 7.05813 13.155 7.19828 13.38 7.36C13.6931 7.58281 13.9875 7.92063 14.235 8.36625C14.2406 8.37164 14.2444 8.37523 14.25 8.38062C14.5013 8.78852 14.7319 9.09039 15 9.315C15.3337 9.59172 15.7762 9.70312 16.26 9.70312C16.8188 9.70312 17.3438 9.50727 17.73 9.12813C18.1031 8.76336 18.33 8.29617 18.33 7.80562C18.33 7.33305 18.1838 6.85148 17.925 6.39687C17.6588 5.92969 17.25 5.50563 16.725 5.1175C16.1887 4.72039 15.5269 4.40773 14.76 4.18313C13.9781 3.95312 13.0631 3.8525 12.045 3.8525ZM12.045 4.7725C12.9919 4.7725 13.815 4.87852 14.475 5.07438C15.1537 5.27383 15.7181 5.53797 16.14 5.85063C16.5844 6.17945 16.8975 6.51547 17.085 6.8425C17.2819 7.1875 17.37 7.50914 17.37 7.80562C17.37 8.05719 17.2819 8.25844 17.055 8.48125C16.8412 8.69328 16.5956 8.78312 16.26 8.78312C15.93 8.78312 15.7387 8.71484 15.63 8.625C15.4913 8.51 15.3019 8.27461 15.09 7.935C15.0844 7.92422 15.0806 7.91703 15.075 7.90625C14.7769 7.37977 14.4056 6.94133 13.965 6.62687C13.4531 6.25852 12.735 6.13812 11.835 6.13812C10.9838 6.13812 10.2544 6.29625 9.675 6.65563C9.135 6.98984 8.775 7.47859 8.775 8.03563C8.775 8.36086 8.89125 8.67891 9.105 8.92688C9.315 9.16406 9.58875 9.36172 9.915 9.51625C10.23 9.66539 10.56 9.78938 10.89 9.87563C11.2087 9.95828 11.7281 10.0805 12.435 10.235C13.3125 10.4129 14.115 10.6123 14.82 10.8244C15.5194 11.0382 16.1194 11.297 16.59 11.5863C17.055 11.8738 17.4131 12.2331 17.67 12.6644C17.9156 13.0777 18.045 13.6041 18.045 14.26C18.045 15.0273 17.8237 15.7083 17.37 16.3156C16.9219 16.9158 16.2525 17.3973 15.345 17.7531C14.4544 18.1035 13.3556 18.285 12.09 18.285C10.5675 18.285 9.32625 18.0388 8.385 17.5662C7.70813 17.2213 7.16625 16.7559 6.75 16.1863C6.74437 16.1863 6.74062 16.1863 6.735 16.1863C6.30937 15.6095 6.12 15.0722 6.12 14.5763C6.12 14.3157 6.21562 14.1252 6.435 13.9294C6.64687 13.7425 6.88312 13.6562 7.245 13.6562C7.52812 13.6562 7.72875 13.7155 7.905 13.8575C8.08125 13.9977 8.26312 14.2366 8.415 14.5763C8.42062 14.5816 8.42437 14.5852 8.43 14.5906C8.63625 15.038 8.86312 15.4208 9.12 15.7406C9.39 16.0784 9.76125 16.3444 10.215 16.5456C10.7081 16.7666 11.3081 16.8619 12.015 16.8619C12.99 16.8619 13.8281 16.6696 14.49 16.2437C15.1256 15.8341 15.525 15.2321 15.525 14.5619C15.525 14.0516 15.3169 13.5736 14.94 13.2394C14.5763 12.9177 14.1225 12.677 13.59 12.5206C13.0669 12.3661 12.3675 12.2152 11.52 12.0463C10.4006 11.8198 9.46125 11.5485 8.73 11.2556C8.00062 10.9627 7.44375 10.5602 7.035 10.0769C6.63562 9.6043 6.42 9.03289 6.42 8.29438C6.42 7.60258 6.63187 7.00063 7.065 6.46875C7.07062 6.46875 7.07437 6.46875 7.08 6.46875C7.50375 5.94406 8.12625 5.5182 8.985 5.21812C9.82875 4.92164 10.8619 4.7725 12.045 4.7725Z" fill="#currentColor" />
        </symbol>

        <symbol id="icon-star" viewBox="0 0 14 12">
          <path d="M11.481 4.14845L8.65177 3.75745L7.38722 1.32696C7.16064 0.893731 6.50416 0.888224 6.27565 1.32696L5.01109 3.75745L2.18182 4.14845C1.67445 4.21821 1.47111 4.81115 1.83905 5.15075L3.88597 7.04154L3.40183 9.7125C3.31469 10.1953 3.85111 10.5569 4.30038 10.3311L6.83143 9.07L9.36248 10.3311C9.81176 10.5551 10.3482 10.1953 10.261 9.7125L9.7769 7.04154L11.8238 5.15075C12.1918 4.81115 11.9884 4.21821 11.481 4.14845ZM8.77958 6.73314L9.23854 9.27377L6.83143 8.07505L4.42432 9.27377L4.88328 6.73314L2.93513 4.93414L5.62691 4.56332L6.83143 2.25032L8.03595 4.56332L10.7277 4.93414L8.77958 6.73314Z" fill="#C90606" />
        </symbol>

        <symbol id="icon-success" viewBox="0 0 26 20">
          <path d="M9.32026 18.9812L0.964793 10.6727C0.916606 10.6247 0.878365 10.5678 0.852271 10.505C0.826177 10.4423 0.812744 10.375 0.812744 10.307C0.812744 10.2391 0.826177 10.1718 0.852271 10.109C0.878365 10.0463 0.916606 9.98932 0.964793 9.9414L3.07417 7.82969C3.27573 7.62812 3.60151 7.62812 3.80307 7.82969L9.30385 13.2977C9.50542 13.4992 9.83354 13.4969 10.0351 13.2953L22.1898 1.02344C22.3914 0.819531 22.7195 0.819531 22.9234 1.02109L25.0351 3.13281C25.2367 3.33437 25.2367 3.66016 25.0374 3.86172L11.7953 17.2234L11.7976 17.2258L10.0515 18.9812C9.84995 19.1828 9.52182 19.1828 9.32026 18.9812Z" fill="#C90606" />
        </symbol>

        <symbol id="icon-vsco" viewBox="0 0 24 24">
          <path d="M11.9925 1.43347C11.9427 1.43427 11.8934 1.44281 11.8463 1.45878C11.0322 1.4708 10.2321 1.55811 9.47438 1.74753C9.14575 1.82754 8.82095 1.92865 8.49844 2.04659C8.42117 2.0553 8.34718 2.08264 8.28281 2.12628C7.87052 2.27704 7.47039 2.45167 7.09031 2.65315C6.46643 2.97719 5.88207 3.37954 5.33531 3.8269C5.26212 3.85663 5.19739 3.90397 5.14688 3.96472C5.0958 4.00743 5.04472 4.05005 4.995 4.09597C4.36204 4.6586 3.79416 5.29628 3.30656 6.00003C3.16308 6.20633 3.03162 6.42121 2.90531 6.63753C2.85474 6.69444 2.81843 6.76257 2.79938 6.83628C2.24509 7.81696 1.84513 8.8978 1.63406 10.0397C1.60177 10.1073 1.58571 10.1814 1.58719 10.2563C1.55926 10.4122 1.53248 10.5693 1.515 10.7353C1.46526 11.1507 1.44 11.5712 1.44 12C1.44 12.4289 1.46526 12.8494 1.515 13.2647C1.53248 13.4307 1.55926 13.5879 1.58719 13.7438C1.58586 13.8183 1.60191 13.8921 1.63406 13.9594C1.84493 15.1008 2.2437 16.1815 2.7975 17.1619C2.81683 17.2365 2.8538 17.3053 2.90531 17.3625C3.03176 17.5791 3.16291 17.7945 3.30656 18.001C3.79468 18.7054 4.36266 19.3377 4.99313 19.9032C5.04269 19.949 5.09411 19.9909 5.145 20.0335L5.14594 20.0344C5.19676 20.0961 5.26218 20.1441 5.33625 20.1741H5.33719C5.8835 20.6209 6.46704 21.0232 7.09031 21.3469C7.47039 21.5484 7.87052 21.723 8.28281 21.8738C8.3469 21.9173 8.42056 21.9446 8.4975 21.9535C8.82029 22.0716 9.14546 22.1724 9.47438 22.2525C10.2321 22.442 11.0322 22.5293 11.8463 22.5413C11.946 22.575 12.054 22.575 12.1538 22.5413C12.9678 22.5293 13.7679 22.442 14.5256 22.2525C14.8543 22.1725 15.1791 22.0714 15.5016 21.9535C15.5788 21.9448 15.6528 21.9174 15.7172 21.8738C16.1295 21.723 16.5296 21.5484 16.9097 21.3469C17.5336 21.0229 18.1179 20.6205 18.6647 20.1732C18.7379 20.1434 18.8026 20.0961 18.8531 20.0353C18.9047 19.9922 18.9567 19.9496 19.0069 19.9032C19.6373 19.3377 20.2053 18.7054 20.6934 18.001V18C20.8369 17.7937 20.9684 17.5788 21.0947 17.3625C21.1453 17.3056 21.1816 17.2375 21.2006 17.1638C21.7549 16.1831 22.1549 15.1023 22.3659 13.9603C22.3982 13.8928 22.4143 13.8186 22.4128 13.7438C22.4407 13.5879 22.4675 13.4307 22.485 13.2647C22.5347 12.8494 22.56 12.4289 22.56 12C22.56 11.5712 22.5347 11.1507 22.485 10.7353C22.4675 10.5693 22.4407 10.4122 22.4128 10.2563C22.4141 10.1817 22.3981 10.1079 22.3659 10.0407C22.1551 8.89924 21.7563 7.81852 21.2025 6.83815C21.1832 6.7636 21.1462 6.69479 21.0947 6.63753C20.9684 6.42121 20.8369 6.20633 20.6934 6.00003V5.99909C20.2059 5.2956 19.6378 4.65844 19.005 4.09597C18.9559 4.05065 18.9054 4.00877 18.855 3.96659C18.8547 3.96628 18.8544 3.96597 18.8541 3.96565C18.8032 3.90398 18.7378 3.85596 18.6638 3.82597C18.6634 3.82597 18.6631 3.82597 18.6628 3.82597C18.1166 3.37915 17.533 2.97687 16.9097 2.65315C16.5296 2.45167 16.1295 2.27704 15.7172 2.12628C15.6531 2.08279 15.5794 2.05545 15.5025 2.04659C15.1797 1.92851 14.8545 1.82761 14.5256 1.74753C13.7679 1.55811 12.9678 1.4708 12.1538 1.45878C12.1018 1.4412 12.0473 1.43264 11.9925 1.43347ZM8.39531 2.07659C8.392 2.07775 8.38927 2.08011 8.38594 2.08128C8.38445 2.08185 8.38279 2.08164 8.38125 2.08222L8.39531 2.07659ZM15.6047 2.07659L15.6188 2.08222C15.6173 2.08164 15.6156 2.08185 15.6141 2.08128C15.6108 2.08011 15.608 2.07776 15.6047 2.07659ZM11.52 2.45815V4.37722C11.0596 4.40634 10.598 4.43454 10.1634 4.54034C10.1631 4.54034 10.1628 4.54034 10.1625 4.54034C10.0515 4.56756 9.94327 4.60868 9.83344 4.64065L9.17719 2.83972C9.35202 2.78593 9.52016 2.72414 9.70406 2.6794C9.705 2.67909 9.70594 2.67878 9.70688 2.67847C10.2834 2.53432 10.9013 2.48964 11.52 2.45815ZM12.48 2.45815C13.0987 2.48964 13.7166 2.53432 14.2931 2.67847C14.2941 2.67878 14.295 2.67909 14.2959 2.6794C14.4798 2.72414 14.648 2.78593 14.8228 2.83972L14.1666 4.64065C14.0567 4.60868 13.9485 4.56756 13.8375 4.54034C13.8372 4.54034 13.8369 4.54034 13.8366 4.54034C13.402 4.43454 12.9404 4.40634 12.48 4.37722V2.45815ZM8.27813 3.1744L8.93344 4.97722C8.76534 5.05064 8.59409 5.11301 8.43094 5.20128L8.43 5.20222C8.17249 5.3378 7.94275 5.52689 7.69969 5.69159C7.60163 5.70451 7.50995 5.7474 7.43719 5.8144L6.22969 4.37628C6.64863 4.05915 7.07181 3.74364 7.53656 3.50253C7.53782 3.50191 7.53907 3.50128 7.54031 3.50065C7.78033 3.37342 8.03047 3.2786 8.27813 3.1744ZM15.7219 3.1744C15.9695 3.2786 16.2197 3.37342 16.4597 3.50065C16.4609 3.50128 16.4622 3.50191 16.4634 3.50253C16.9282 3.74364 17.3514 4.05915 17.7703 4.37628L16.5628 5.8144C16.4899 5.74774 16.3983 5.70518 16.3003 5.69253C16.0571 5.52771 15.8277 5.33788 15.57 5.20222C15.4065 5.11371 15.235 5.0508 15.0666 4.97722L15.7219 3.1744ZM5.48438 4.98097L6.72282 6.45659C6.3426 6.81912 5.97782 7.20124 5.67656 7.63784C5.65004 7.67594 5.62978 7.71573 5.60438 7.75409L3.94031 6.79315C3.9926 6.71193 4.04044 6.62596 4.095 6.54753C4.095 6.54722 4.095 6.5469 4.095 6.54659C4.49575 5.96819 4.97398 5.45588 5.48438 4.98097ZM18.5156 4.98097C19.026 5.45588 19.5042 5.96819 19.905 6.54659C19.905 6.5469 19.905 6.54722 19.905 6.54753C19.9596 6.62596 20.0074 6.71193 20.0597 6.79315L18.3956 7.75409C18.3702 7.71573 18.35 7.67594 18.3234 7.63784L18.3216 7.63597C18.0207 7.20019 17.6568 6.81852 17.2772 6.45659L18.5156 4.98097ZM11.52 5.33722V7.2244C10.8195 7.29446 10.1647 7.51946 9.585 7.85909L8.46938 6.3244C8.6094 6.23784 8.73127 6.12795 8.87813 6.05065C8.87969 6.04973 8.88126 6.04879 8.88281 6.04784C9.12647 5.91569 9.38786 5.80421 9.65438 5.70472C9.69084 5.69544 9.72608 5.68191 9.75938 5.6644C9.96126 5.59031 10.1688 5.52678 10.3913 5.47222L10.3903 5.47315C10.7522 5.38504 11.1376 5.36479 11.52 5.33722ZM12.48 5.33722C12.8624 5.36479 13.2477 5.38503 13.6097 5.47315L13.6088 5.47222C13.8315 5.52685 14.0394 5.59018 14.2416 5.6644C14.2754 5.68237 14.3113 5.69622 14.3484 5.70565C14.614 5.80491 14.8744 5.91615 15.1172 6.04784C15.1187 6.04879 15.1203 6.04973 15.1219 6.05065C15.2687 6.12795 15.3906 6.23784 15.5306 6.3244L14.415 7.85909C13.8353 7.51946 13.1805 7.29446 12.48 7.2244V5.33722ZM7.67625 6.86534L8.80969 8.42534C8.3012 8.87974 7.88785 9.438 7.60875 10.0697L5.78532 9.47534C5.8935 9.20185 6.01243 8.93589 6.1575 8.6869C6.17975 8.65638 6.19831 8.62334 6.21281 8.58847C6.29408 8.44876 6.37659 8.31354 6.46594 8.18534C6.46625 8.18472 6.46657 8.18409 6.46688 8.18347C6.77566 7.73596 7.13933 7.32739 7.54313 6.96847C7.54375 6.96784 7.54438 6.96722 7.545 6.96659C7.57463 6.93992 7.59155 6.92594 7.6125 6.90847C7.61313 6.90815 7.61375 6.90784 7.61438 6.90753C7.63607 6.8951 7.65676 6.88099 7.67625 6.86534ZM16.3238 6.86534C16.3427 6.88027 16.3628 6.89374 16.3838 6.90565C16.4054 6.92353 16.4238 6.93852 16.455 6.96659C16.4556 6.96722 16.4563 6.96784 16.4569 6.96847C16.8607 7.32739 17.2243 7.73596 17.5331 8.18347C17.5334 8.18409 17.5338 8.18472 17.5341 8.18534C17.6236 8.31375 17.7058 8.44944 17.7872 8.5894C17.8019 8.62497 17.8207 8.65865 17.8434 8.68972C17.8438 8.69003 17.8441 8.69034 17.8444 8.69065C17.9877 8.93696 18.1067 9.20184 18.2175 9.4744L16.3913 10.0697C16.1122 9.438 15.6988 8.87974 15.1903 8.42534L16.3238 6.86534ZM3.48 7.63503L5.14406 8.59503C5.03309 8.81893 4.91002 9.03778 4.82344 9.2719V9.27284C4.7983 9.33718 4.7897 9.40925 4.76625 9.4744C4.72736 9.5241 4.69864 9.58098 4.68175 9.64179C4.66486 9.7026 4.66012 9.76614 4.66781 9.82878C4.63054 9.95108 4.59455 10.0739 4.56375 10.1991L2.67 9.86534C2.84692 9.08089 3.11971 8.33395 3.48 7.63503ZM20.52 7.63503C20.8803 8.33395 21.1531 9.08089 21.33 9.86534L19.4381 10.1991C19.4073 10.0713 19.3708 9.94555 19.3331 9.82034C19.3457 9.69974 19.3123 9.57883 19.2394 9.4819C19.2151 9.41373 19.2076 9.33932 19.1813 9.2719C19.0921 9.03869 18.9694 8.81838 18.8578 8.59409L20.52 7.63503ZM11.9438 8.16284C11.9824 8.16755 12.0214 8.16755 12.06 8.16284C12.8405 8.17482 13.5637 8.41594 14.1638 8.82472C14.2113 8.88139 14.2713 8.92631 14.3391 8.95597C14.9185 9.40122 15.3644 10.0075 15.6141 10.71C15.6204 10.7862 15.6448 10.8599 15.6853 10.9247C15.7843 11.2661 15.84 11.626 15.84 12C15.84 12.3734 15.7839 12.7326 15.6853 13.0735C15.6445 13.1389 15.6201 13.2132 15.6141 13.29C15.3647 13.9917 14.9193 14.5971 14.3409 15.0422C14.2723 15.0722 14.2116 15.1178 14.1638 15.1753C13.5628 15.5848 12.8382 15.826 12.0563 15.8372C12.0176 15.8325 11.9786 15.8325 11.94 15.8372C10.2937 15.8119 8.90819 14.7595 8.38594 13.29C8.37963 13.2138 8.3552 13.1402 8.31469 13.0753C8.21575 12.734 8.16 12.374 8.16 12C8.16 11.6267 8.21608 11.2675 8.31469 10.9266C8.35549 10.8612 8.37992 10.7869 8.38594 10.71C8.90859 9.23939 10.2958 8.18656 11.9438 8.16284ZM18.5006 10.3913C18.5332 10.5232 18.5852 10.6473 18.6094 10.7832C18.612 10.8204 18.6189 10.8572 18.63 10.8928C18.6449 10.9935 18.66 11.0916 18.6703 11.1844C18.6703 11.1857 18.6703 11.1869 18.6703 11.1882C18.7018 11.4541 18.72 11.7282 18.72 12C18.72 12.2718 18.7019 12.5459 18.6703 12.8119C18.6703 12.8132 18.6703 12.8144 18.6703 12.8157C18.6599 12.909 18.645 13.0077 18.63 13.1091C18.6191 13.1438 18.6122 13.1797 18.6094 13.216C18.5852 13.3521 18.5332 13.4766 18.5006 13.6088L16.6884 13.0191C16.76 12.6902 16.8 12.3499 16.8 12C16.8 11.6501 16.76 11.3099 16.6884 10.981L18.5006 10.3913ZM5.50125 10.3922L7.31156 10.981C7.24001 11.3099 7.2 11.6501 7.2 12C7.2 12.3499 7.24001 12.6902 7.31156 13.0191L5.50125 13.6078C5.46811 13.4761 5.4147 13.3508 5.39063 13.216C5.38797 13.179 5.38105 13.1426 5.37 13.1072C5.35509 13.0065 5.34 12.9085 5.32969 12.8157C5.32969 12.8144 5.32969 12.8132 5.32969 12.8119C5.29813 12.5459 5.28 12.2718 5.28 12C5.28 11.7282 5.29813 11.4542 5.32969 11.1882C5.32969 11.1869 5.32969 11.1857 5.32969 11.1844C5.34007 11.091 5.35498 10.9924 5.37 10.891C5.38084 10.8565 5.38776 10.821 5.39063 10.785C5.41473 10.6498 5.46803 10.5242 5.50125 10.3922ZM2.47406 10.8057L4.3725 11.1403C4.34141 11.4208 4.32 11.7085 4.32 12C4.32 12.2916 4.34141 12.5792 4.3725 12.8597L2.47406 13.1944C2.47296 13.1845 2.47042 13.1743 2.46938 13.1644C2.46908 13.1619 2.46877 13.1594 2.46844 13.1569C2.42277 12.7778 2.4 12.3942 2.4 12C2.4 11.6058 2.42277 11.2222 2.46844 10.8432C2.46877 10.8407 2.46908 10.8382 2.46938 10.8357C2.47042 10.8257 2.47295 10.8156 2.47406 10.8057ZM21.5259 10.8057C21.527 10.8156 21.5296 10.8257 21.5306 10.8357C21.5309 10.8382 21.5312 10.8407 21.5316 10.8432C21.5772 11.2222 21.6 11.6058 21.6 12C21.6 12.3942 21.5772 12.7778 21.5316 13.1569C21.5312 13.1594 21.5309 13.1619 21.5306 13.1644C21.5296 13.1743 21.527 13.1845 21.5259 13.1944L19.6275 12.8597C19.6586 12.5792 19.68 12.2916 19.68 12C19.68 11.7085 19.6586 11.4208 19.6275 11.1403L21.5259 10.8057ZM4.56375 13.801C4.59462 13.9265 4.63044 14.0496 4.66781 14.1722C4.65254 14.2984 4.68794 14.4255 4.76625 14.5257C4.7897 14.5908 4.7983 14.6629 4.82344 14.7272V14.7282C4.91002 14.9623 5.03309 15.1811 5.14406 15.405L3.48 16.365C3.11971 15.6661 2.84692 14.9192 2.67 14.1347L4.56375 13.801ZM19.4381 13.801L21.33 14.1347C21.1531 14.9192 20.8803 15.6661 20.52 16.365L18.8578 15.406C18.9694 15.1817 19.0921 14.9614 19.1813 14.7282C19.2077 14.6605 19.215 14.5857 19.2394 14.5172C19.3125 14.42 19.346 14.2988 19.3331 14.1778C19.3706 14.0532 19.4075 13.9282 19.4381 13.801ZM7.60875 13.9303C7.88785 14.5621 8.3012 15.1203 8.80969 15.5747L7.67625 17.1347C7.65729 17.1198 7.63724 17.1063 7.61625 17.0944C7.59465 17.0765 7.57619 17.0615 7.545 17.0335C7.54438 17.0328 7.54375 17.0322 7.54313 17.0316C7.13933 16.6727 6.77566 16.2641 6.46688 15.8166C6.46657 15.816 6.46625 15.8153 6.46594 15.8147C6.37644 15.6863 6.29421 15.5506 6.21281 15.4107C6.19815 15.3751 6.17927 15.3414 6.15656 15.3103C6.15657 15.31 6.15657 15.3097 6.15656 15.3094C6.01229 15.0614 5.89303 14.797 5.78532 14.5247L7.60875 13.9303ZM16.3913 13.9303L18.2175 14.5257C18.1063 14.7993 17.9865 15.0651 17.8425 15.3122C17.8202 15.343 17.8016 15.3764 17.7872 15.4116C17.7059 15.5513 17.6234 15.6865 17.5341 15.8147C17.5338 15.8153 17.5334 15.816 17.5331 15.8166C17.2243 16.2641 16.8607 16.6727 16.4569 17.0316C16.4563 17.0322 16.4556 17.0328 16.455 17.0335C16.4254 17.0601 16.4085 17.0741 16.3875 17.0916C16.387 17.092 16.3861 17.0921 16.3856 17.0925C16.3639 17.105 16.3432 17.1191 16.3238 17.1347L15.1903 15.5747C15.6988 15.1203 16.1122 14.5621 16.3913 13.9303ZM9.585 16.141C10.1647 16.4806 10.8195 16.7056 11.52 16.7757V18.6628C11.1376 18.6353 10.7523 18.615 10.3903 18.5269L10.3913 18.5278C10.1685 18.4732 9.96058 18.4099 9.75844 18.3357C9.72459 18.3177 9.68871 18.3038 9.65156 18.2944C9.38601 18.1951 9.12562 18.0839 8.88281 17.9522C8.88126 17.9513 8.87969 17.9503 8.87813 17.9494C8.73127 17.8721 8.6094 17.7622 8.46938 17.6757L9.585 16.141ZM14.415 16.141L15.5306 17.6757C15.3906 17.7622 15.2687 17.8721 15.1219 17.9494C15.1203 17.9503 15.1187 17.9513 15.1172 17.9522C14.8735 18.0844 14.6121 18.1958 14.3456 18.2953C14.3092 18.3046 14.2739 18.3181 14.2406 18.3357C14.0387 18.4097 13.8312 18.4733 13.6088 18.5278L13.6097 18.5269C13.2478 18.615 12.8624 18.6353 12.48 18.6628V16.7757C13.1805 16.7056 13.8353 16.4806 14.415 16.141ZM5.60438 16.246C5.63026 16.2851 5.65139 16.3253 5.67844 16.3641C5.97934 16.7998 6.34324 17.1815 6.72282 17.5435L5.48438 19.0191C4.97282 18.5403 4.49487 18.0306 4.095 17.4535C4.095 17.4532 4.095 17.4528 4.095 17.4525C4.04044 17.3741 3.9926 17.2881 3.94031 17.2069L5.60438 16.246ZM18.3956 16.246L20.0597 17.2069C20.0074 17.2881 19.9596 17.3741 19.905 17.4525C19.905 17.4528 19.905 17.4532 19.905 17.4535C19.5051 18.0306 19.0272 18.5403 18.5156 19.0191L17.2772 17.5435C17.6568 17.1815 18.0207 16.7998 18.3216 16.3641L18.3234 16.3622C18.35 16.3241 18.3702 16.2843 18.3956 16.246ZM7.43719 18.1857C7.50995 18.2527 7.60163 18.2956 7.69969 18.3085C7.94275 18.4732 8.17249 18.6623 8.43 18.7978L8.43094 18.7988C8.59409 18.887 8.76534 18.9494 8.93344 19.0228L8.27813 20.8257C8.03047 20.7215 7.78033 20.6266 7.54031 20.4994C7.53907 20.4988 7.53782 20.4981 7.53656 20.4975C7.07178 20.2564 6.64863 19.9409 6.22969 19.6238L7.43719 18.1857ZM16.5628 18.1866L17.7703 19.6238C17.3514 19.9409 16.9282 20.2564 16.4634 20.4975C16.4622 20.4981 16.4609 20.4988 16.4597 20.4994C16.2197 20.6266 15.9695 20.7215 15.7219 20.8257L15.0666 19.0228C15.2347 18.9494 15.4059 18.887 15.5691 18.7988L15.57 18.7978C15.8275 18.6623 16.0573 18.4732 16.3003 18.3085C16.3983 18.2958 16.4899 18.2533 16.5628 18.1866ZM9.83344 19.3594C9.94327 19.3914 10.0515 19.4325 10.1625 19.4597C10.1628 19.4597 10.1631 19.4597 10.1634 19.4597C10.598 19.5655 11.0596 19.5937 11.52 19.6228V21.5419C10.9013 21.5104 10.2834 21.4657 9.70688 21.3216C9.70594 21.3213 9.705 21.321 9.70406 21.3207C9.52016 21.2759 9.35202 21.2141 9.17719 21.1603L9.83344 19.3594ZM14.1666 19.3594L14.8228 21.1603C14.648 21.2141 14.4798 21.2759 14.2959 21.3207C14.295 21.321 14.2941 21.3213 14.2931 21.3216C13.7166 21.4657 13.0987 21.5104 12.48 21.5419V19.6228C12.9404 19.5937 13.402 19.5655 13.8366 19.4597C13.8369 19.4597 13.8372 19.4597 13.8375 19.4597C13.9485 19.4325 14.0567 19.3914 14.1666 19.3594ZM8.38125 21.9178C8.38274 21.9184 8.3844 21.9182 8.38594 21.9188C8.38925 21.9199 8.39198 21.9223 8.39531 21.9235L8.38125 21.9178ZM15.6188 21.9178L15.6047 21.9235C15.608 21.9223 15.6107 21.92 15.6141 21.9188C15.6156 21.9183 15.6173 21.9184 15.6188 21.9178Z" fill="#currentColor" />
        </symbol>
      </svg>
    </div>
  );
}

export default SvgSprite;
