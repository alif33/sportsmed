import React from "react";
import Layout from "./../../src/components/Layout";
import Link from "next/link";
const Podcast = () => {
  return (
    <>
      <Layout>
        <div
          id="podcast"
          className="container-fluid"
          data-aos="fade-in"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <div className="container mt-4 ">
            <div className="my-4 d-flex justify-content-around align-items-center ">
              <div className=" searchbar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className=" bg-transparent py-2 px-4 border-0 text-white "
                  placeholder="Search Podcast "
                  name="search"
                  id="search"
                />
              </div>
              <div className="">
                <span className="mx-1">
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                      className="text-white"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-23.000000, -52.000000)"
                          fill="#000000"
                          fill-rule="nonzero"
                        >
                          <g transform="translate(23.000000, 52.000000)">
                            <path
                              d="M19.6042571,17.3351932 C19.1140821,18.4998908 18.1285518,19.3842147 16.9177516,19.7458153 C16.2750568,19.9359372 15.4846043,20 14.4998967,20 L5.50010333,20 C4.51539574,20 3.72494317,19.9359372 3.0822484,19.7458153 C1.87152123,19.3840844 0.886039629,18.4998042 0.395742922,17.3351932 C0.00309981401,16.3401529 0,15.2107874 0,14.4998967 L0,5.50010333 C0,4.78921265 0.00413308535,3.66088035 0.395742922,2.66480678 C0.885917933,1.50010915 1.87144818,0.615785277 3.0822484,0.254184749 C3.72494317,0.0640628229 4.51539574,0 5.50010333,0 L14.4998967,0 C15.4846043,0 16.2750568,0.0640628229 16.9177516,0.254184749 C18.1284788,0.615915619 19.1139604,1.50019584 19.6042571,2.66480678 C19.9969002,3.65984708 20,4.78921265 20,5.50010333 L20,14.4998967 C20,15.2107874 19.9958669,16.3391197 19.6042571,17.3351932 L19.6042571,17.3351932 Z M11.450713,11.4961769 C11.1510643,11.1789626 10.6240959,10.9764414 10.0010333,10.9764414 C9.37900393,10.9764414 8.85203554,11.1789626 8.55135359,11.4961769 C8.39743042,11.6504902 8.30331968,11.8544578 8.28580285,12.071709 C8.23517256,12.5387477 8.26410415,12.9417235 8.31886753,13.5844183 C8.3705311,14.1971482 8.46972515,15.0144658 8.59888407,15.8472825 C8.69187849,16.439347 8.76524075,16.7596611 8.83343666,16.9890473 C8.94399669,17.3599917 9.35627196,17.6844389 10.0010333,17.6844389 C10.6457946,17.6844389 11.0580698,17.3599917 11.1686299,16.9890473 C11.2368258,16.7596611 11.3112213,16.439347 11.4031825,15.8472825 C11.5323414,15.0144658 11.6305022,14.1971482 11.683199,13.5844183 C11.7379624,12.9406902 11.7658607,12.5387477 11.7162637,12.071709 C11.6987469,11.8544578 11.6046361,11.6504902 11.450713,11.4961769 L11.450713,11.4961769 Z M8.36536474,8.67534615 C8.36536474,9.57955692 9.09837241,10.3125646 10.0025832,10.3125646 C10.906794,10.3125646 11.6398016,9.57955692 11.6398016,8.67534615 C11.6398016,7.77113537 10.906794,7.03812771 10.0025832,7.03812771 C9.09837241,7.03812771 8.36536474,7.77113537 8.36536474,8.67534615 Z M9.98243439,2.21740029 C6.15416408,2.227733 3.01818558,5.33271337 2.96962182,9.16098367 C2.93139078,12.261831 4.91113867,14.9142385 7.67513949,15.8875801 C7.70635627,15.8985226 7.74102669,15.8922568 7.76643874,15.8710801 C7.79185079,15.8499034 7.80426591,15.8169312 7.79913205,15.7842529 C7.76320318,15.5445005 7.72944826,15.3044272 7.69787146,15.0640628 C7.68725627,14.9797056 7.63311381,14.9071234 7.55528002,14.8729076 C5.29875403,13.8884864 3.84811602,11.6517303 3.86960116,9.18991527 C3.90163257,5.85864848 6.62120273,3.14424468 9.95246952,3.11634635 C11.587251,3.1047901 13.1591354,3.74569247 14.3197749,4.89702205 C15.4804144,6.04835163 16.1339553,7.61502351 16.1355652,9.24984501 C16.1330902,11.6899313 14.6863715,13.8971202 12.4498863,14.8729076 C12.3720525,14.9071234 12.3179101,14.9797056 12.3072949,15.0640628 C12.2762968,15.3017152 12.2421988,15.5435007 12.2060343,15.7842529 C12.2009004,15.8169312 12.2133156,15.8499034 12.2387276,15.8710801 C12.2641397,15.8922568 12.2988101,15.8985226 12.3300269,15.8875801 C15.0681959,14.9235379 17.0355445,12.3124613 17.0355445,9.24984501 C17.0336282,7.38163568 16.2892924,5.59078076 14.9664285,4.27159894 C13.6435645,2.95241713 11.8506418,2.21307597 9.98243439,2.21635608 L9.98243439,2.21740029 Z M9.85534201,5.4432734 C10.8912944,5.4034097 11.8988759,5.78677173 12.6463234,6.50517886 C13.3937709,7.223586 13.8167392,8.21519313 13.8179376,9.25191155 C13.8183908,10.3049376 13.3821431,11.3110012 12.6131432,12.0303782 C12.549881,12.0889843 12.5158283,12.1726026 12.5201488,12.2587311 C12.5356479,12.5201488 12.5304815,12.7753668 12.5129159,13.0626162 C12.5108472,13.097883 12.5289399,13.1312764 12.5596126,13.1488036 C12.5902853,13.1663309 12.6282405,13.1649649 12.6575739,13.1452779 C13.9463418,12.2684201 14.7177606,10.8106939 14.7179169,9.25191155 C14.7163326,7.97056166 14.193524,6.74499547 13.2697191,5.85705141 C12.3459143,4.96910734 11.1006197,4.49520557 9.82021079,4.54432734 C7.31887978,4.64967782 5.33387194,6.68770985 5.29448233,9.19094854 C5.2746194,10.7709007 6.0483665,12.2555329 7.35482538,13.1442447 C7.38415874,13.1639316 7.42211395,13.1652976 7.45278668,13.1477704 C7.4834594,13.1302431 7.50155208,13.0968497 7.49948336,13.061583 C7.48043709,12.7943881 7.47733177,12.5262955 7.49018392,12.2587311 C7.49503235,12.172929 7.46175698,12.0893625 7.39925604,12.0303782 C6.60409829,11.2867338 6.16583885,10.2379206 6.19549494,9.14961769 C6.25443407,7.14544945 7.85207752,5.52750844 9.85534201,5.4432734 L9.85534201,5.4432734 Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </span>
                <span>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      width="20"
                      height="20"
                      className="text-white"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          transform="translate(-23.000000, -89.000000)"
                          fill="#000000"
                          fill-rule="nonzero"
                        >
                          <g transform="translate(23.000000, 89.000000)">
                            <path
                              d="M15.915,8.865 C12.692,6.951 7.375,6.775 4.298,7.709 C3.80370515,7.85894531 3.28144531,7.57979485 3.1315,7.0855 C2.98155469,6.59120515 3.26070515,6.06894531 3.755,5.919 C7.287,4.847 13.159,5.054 16.87,7.256 C17.1575988,7.42659432 17.3323401,7.7376621 17.3284657,8.07202713 C17.3244608,8.40639216 17.1424389,8.71325642 16.8509005,8.87702713 C16.559362,9.04079784 16.2025988,9.03659432 15.915,8.866 L15.915,8.865 Z M15.81,11.701 C15.7016629,11.8772407 15.5277495,12.0032243 15.3265213,12.051234 C15.1252932,12.0992437 14.9132349,12.0653465 14.737,11.957 C12.05,10.305 7.952,9.827 4.773,10.792 C4.36619144,10.9018971 3.94564633,10.6688168 3.82322225,10.2656011 C3.70079817,9.86238536 3.92076274,9.43483394 4.32,9.3 C7.952,8.198 12.467,8.732 15.553,10.629 C15.9197504,10.8542322 16.0347598,11.3339598 15.81,11.701 L15.81,11.701 Z M14.586,14.424 C14.4998815,14.5651819 14.3611634,14.6663307 14.2004117,14.7051587 C14.03966,14.7439867 13.8700664,14.7173076 13.729,14.631 C11.381,13.196 8.425,12.871 4.944,13.667 C4.60848701,13.7434914 4.27449144,13.533513 4.198,13.198 C4.12150856,12.862487 4.33148701,12.5284914 4.667,12.452 C8.477,11.581 11.744,11.956 14.379,13.566 C14.673,13.746 14.766,14.13 14.586,14.424 L14.586,14.424 Z M10,0 C4.477,0 0,4.477 0,10 C0,15.523 4.477,20 10,20 C15.523,20 20,15.523 20,10 C20,4.477 15.523,0 10,0 Z"
                              fill="currentColor"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </a>
                </span>

                <span className="mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    className="text-white"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-23.000000, -130.000000)"
                        fill="#000000"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(23.000000, 130.000000)">
                          <path
                            d="M15.5172727,10.2309091 L15.5172727,14.6181818 L13.0445455,14.6181818 L13.0445455,10.2309091 L15.5172727,10.2309091 Z M9.89818182,5.05181818 L9.89818182,5.05272727 C10.3493603,5.04051205 10.7715937,5.27423338 11.000783,5.66305658 C11.2299724,6.05187977 11.2299724,6.53448387 11.000783,6.92330706 C10.7715937,7.31213025 10.3493603,7.54585159 9.89818182,7.53363636 C9.21284665,7.53363636 8.65727273,6.97806244 8.65727273,6.29272727 C8.65727273,5.60739211 9.21284665,5.05181818 9.89818182,5.05181818 Z M9.89818182,15.9572727 C10.583517,15.9572727 11.1390909,16.5128467 11.1390909,17.1981818 C11.1390909,17.2500906 11.1359036,17.301255 11.1297142,17.3514899 L11.1297397,18.3933216 C11.1359144,18.443463 11.1390909,18.4945424 11.1390909,18.5463636 C11.1390909,19.2316988 10.583517,19.7872727 9.89818182,19.7872727 C9.21284668,19.7872727 8.6572728,19.2316988 8.6572728,18.5463636 L8.65727273,18.5454545 L8.65727273,17.1981818 C8.65727273,16.5128467 9.21284665,15.9572727 9.89818182,15.9572727 Z M5.51090909,12.02 C6.19624426,12.02 6.75181818,12.5755739 6.75181818,13.2609091 C6.75181818,13.3124671 6.74867385,13.3632908 6.74256648,13.4131988 L6.74259168,14.4570654 C6.74868444,14.5068806 6.75181818,14.5576198 6.75181818,14.6090909 C6.75181818,15.2944261 6.19624426,15.85 5.51090909,15.85 C4.82557392,15.85 4.27,15.2944261 4.27,14.6090909 L4.27,13.26 L4.27000007,13.2609091 C4.27000007,12.575574 4.82557395,12.02 5.51090909,12.02 Z M14.2763636,13.3681818 C14.9616988,13.3681818 15.5172727,13.9237557 15.5172727,14.6090909 C15.5172727,15.2944261 14.9616988,15.85 14.2763636,15.85 C13.5910285,15.85 13.0354545,15.2944261 13.0354545,14.6090909 C13.0354545,13.9237557 13.5910285,13.3681818 14.2763636,13.3681818 Z M11.13,6.29272727 L11.1312718,13.3453725 C11.1364377,13.3913531 11.1390909,13.438094 11.1390909,13.4854545 C11.1390909,14.1707897 10.583517,14.7263636 9.89818182,14.7263636 C9.21284665,14.7263636 8.65727273,14.1707897 8.65727273,13.4854545 L8.65727273,6.29272727 L11.13,6.29272727 Z M1.24090909,7.97363636 L1.24090909,7.97454545 C1.69208756,7.96233023 2.11432097,8.19605157 2.3435103,8.58487476 C2.50752224,8.86312352 2.55416433,9.18939831 2.48343657,9.49496257 L2.48181818,10.5636364 C2.48181818,11.2489715 1.92624426,11.8045455 1.24090909,11.8045455 C0.555573924,11.8045455 0,11.2489715 0,10.5636364 C0,10.5117981 0.00317860484,10.4607023 0.00935154198,10.4105331 L0.00937209795,9.36784811 C0.00318726127,9.31761861 0,9.26645425 0,9.21454545 C0,8.52921029 0.555573924,7.97363636 1.24090909,7.97363636 Z M18.5463636,7.97363636 C18.9966278,7.96216604 19.4189457,8.19573291 19.6482768,8.58447165 C19.811572,8.8612731 19.8586825,9.18566527 19.7895835,9.48993484 L19.7872727,10.5636364 L19.7863636,10.5636364 C19.7863636,11.2489715 19.2307897,11.8045455 18.5454545,11.8045455 C17.8601194,11.8045455 17.3045455,11.2489715 17.3045455,10.5636364 C17.3045455,10.5117114 17.3077347,10.4605314 17.313928,10.4102814 L17.3140633,9.36149039 C17.3083787,9.31330326 17.3054545,9.26426585 17.3054545,9.21454545 C17.3054545,8.52921029 17.8610285,7.97363636 18.5463636,7.97363636 Z M14.2763636,8.99 C14.9616988,8.99 15.5172727,9.54557392 15.5172727,10.2309091 C15.5172727,10.9162443 14.9616988,11.4718182 14.2763636,11.4718182 C13.5910285,11.4718182 13.0354545,10.9162443 13.0354545,10.2309091 C13.0354545,9.54557392 13.5910285,8.99 14.2763636,8.99 Z M5.51090909,3.92909091 C6.19624426,3.92909091 6.75181818,4.48466483 6.75181818,5.17 C6.75181818,5.21974207 6.74889145,5.26880056 6.74320078,5.31701267 L6.74330074,9.41020032 C6.74892572,9.45813921 6.75181818,9.50691364 6.75181818,9.55636364 C6.75181818,10.2416988 6.19624426,10.7972727 5.51090909,10.7972727 C4.83468025,10.7972727 4.28478718,10.256365 4.27029327,9.58361288 L4.27,9.58363636 L4.27,5.16909091 C4.27,4.48466483 4.82557392,3.92909091 5.51090909,3.92909091 Z M14.2763636,3.92818182 C14.7275421,3.91687569 15.1497755,4.15059702 15.3789648,4.53942021 C15.5421591,4.8162818 15.5891509,5.14069174 15.5199402,5.44493641 L15.5172727,6.51818182 C15.5172727,7.20351699 14.9616988,7.75909091 14.2763636,7.75909091 C13.5910285,7.75909091 13.0354545,7.20351699 13.0354545,6.51818182 L13.0440933,6.37098796 L13.0440933,5.31627363 C13.0383886,5.26801438 13.0354545,5.21889529 13.0354545,5.16909091 C13.0354545,4.48375574 13.5910285,3.92818182 14.2763636,3.92818182 Z M9.89818182,0 C10.583517,0 11.1390909,0.555573924 11.1390909,1.24090909 C11.1390909,1.29273035 11.1359144,1.34380969 11.1297454,1.39396302 L11.1297199,2.43579476 C11.1359036,2.48601775 11.1390909,2.53718212 11.1390909,2.58909091 C11.1390909,3.27442608 10.583517,3.83 9.89818182,3.83 C9.21284665,3.83 8.65727273,3.27442608 8.65727273,2.58909091 L8.65727273,1.24090909 C8.65727273,0.555573924 9.21284665,0 9.89818182,0 Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>

                <span className="mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    className="text-white"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g fill="#000000" fill-rule="nonzero">
                        <path
                          d="M0.671428571,12.812381 L1,11.4180952 L0.671428571,9.98 C0.662857143,9.93714286 0.58,9.90380952 0.48,9.90380952 C0.377142857,9.90380952 0.296190476,9.93714286 0.287619048,9.98 L0,11.4180952 L0.287619048,12.8104762 C0.296190476,12.8533333 0.377142857,12.8857143 0.48,12.8857143 C0.581904762,12.887619 0.662857143,12.8552381 0.671428571,12.812381 Z M2.72285714,13.5838095 L3,11.432381 L2.72285714,8.10285714 C2.71428571,8.01714286 2.61047619,7.95238095 2.48380952,7.95238095 C2.35714286,7.95238095 2.25333333,8.01904762 2.24666667,8.10285714 L2,11.432381 L2.24761905,13.5838095 C2.25333333,13.6666667 2.35714286,13.7333333 2.48380952,13.7333333 C2.61047619,13.7361905 2.71428571,13.6685714 2.72190476,13.5838095 L2.72285714,13.5838095 Z M4.76761905,13.5495238 L5,11.4352381 L4.76761905,7.00285714 C4.76095238,6.89904762 4.63714286,6.81619048 4.48571429,6.81619048 C4.33333333,6.81619048 4.20952381,6.89714286 4.20380952,7.00285714 L4,11.4342857 L4.20571429,13.5514286 C4.21238095,13.6542857 4.33428571,13.7361905 4.48761905,13.7361905 C4.63904762,13.7333333 4.76095238,13.652381 4.76761905,13.5495238 L4.76761905,13.5495238 Z M6.81047619,13.5190476 L7,11.4342857 L6.80952381,6.97047619 C6.80571429,6.84666667 6.66571429,6.75142857 6.48952381,6.75142857 C6.31428571,6.75142857 6.17333333,6.84857143 6.16952381,6.97047619 L6,11.4342857 L6.16952381,13.5190476 C6.17333333,13.64 6.31428571,13.7380952 6.48952381,13.7380952 C6.66571429,13.7361905 6.80380952,13.64 6.81047619,13.5190476 L6.81047619,13.5190476 Z M8.84857143,13.492381 L9,11.4371429 L8.84857143,6.31714286 C8.8447619,6.17714286 8.68571429,6.06095238 8.49142857,6.06095238 C8.29809524,6.06095238 8.13714286,6.1752381 8.13428571,6.31714286 L8,11.432381 L8.13428571,13.4895238 C8.13904762,13.6285714 8.29809524,13.7438095 8.49142857,13.7438095 C8.68571429,13.7438095 8.84666667,13.632381 8.84857143,13.492381 Z M10.2771429,13.7457143 L17.4228571,13.7504762 C18.8466667,13.7504762 20,12.64 20,11.272381 C20,9.90285714 18.847619,8.79238095 17.4228571,8.79238095 C17.0695238,8.79238095 16.732381,8.86190476 16.4266667,8.98571429 C16.2228571,6.75142857 14.2742857,5 11.8980952,5 C11.3171429,5 10.7485714,5.10952381 10.2485714,5.29619048 C10.0552381,5.36952381 10.0019048,5.44190476 10,5.58857143 L10,13.4533333 C10.0056111,13.606662 10.1243336,13.7319122 10.2771429,13.7457143 L10.2771429,13.7457143 Z"
                          fill="currentColor"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </span>

                <span className="mx-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20"
                    className="text-white"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        transform="translate(-23.000000, -19.000000)"
                        fill="#000000"
                        fill-rule="nonzero"
                      >
                        <g transform="translate(23.000000, 19.000000)">
                          <path
                            d="M3.5677698,19.999341 C2.30142144,20.0238657 1.12062958,19.3623108 0.480269822,18.2695267 C-0.160089941,17.1767426 -0.160089941,15.8232574 0.480269822,14.7304733 C1.12062958,13.6376892 2.30142144,12.9761343 3.5677698,13.000659 C5.47399434,13.0375757 7,14.5934195 7,16.5 C7,18.4065805 5.47399434,19.9624243 3.5677698,19.999341 L3.5677698,19.999341 Z M0,10.2503047 L0,7 C7.17943189,7 13,12.8205681 13,20 L9.74969532,20 C9.74969532,14.615392 5.38460804,10.2503047 0,10.2503047 Z M0,3.33375 L0,1.08420217e-19 C11.04625,1.08420217e-19 20,8.95375 20,20 L16.66625,20 C16.66625,10.7954843 9.20451571,3.33375 0,3.33375 Z"
                            fill="currentColor"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="py-2">
              <Link href={`podcast/${1}`}>
                <div className="mt-2">
                  <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                    <div className="podcastImage">
                      <i class="fa-solid fa-play"></i>
                      <img
                        src="/images/UltimateLogo.png"
                        class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                        alt="not fiend"
                      />
                    </div>
                    <div className="col-md-8 col-11 lh-md">
                      <a href="#" className="text-decoration-none">
                        <h3 className="text-white">NFL Injury Report Week 2</h3>
                      </a>
                      <p className="my-2">
                        9/23/2020 | 3 min{" "}
                        <span className="border text-white border-white px-1 py-1">
                          latest Episode
                        </span>
                      </p>
                      <p className="text-white">
                        Dr. Chona breaks down the latest injury news from Week 2
                        of the National Football League.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href={`podcast/${2}`}>
                <div className="mt-5">
                  <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                    <div className="podcastImage">
                      <i class="fa-solid fa-play"></i>
                      <img
                        src="/images/UltimateLogo.png"
                        class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                        alt="not fiend"
                      />
                    </div>
                    <div className="col-md-8 col-11 lh-md">
                      <a href="#" className="text-decoration-none">
                        <h3 className="text-white">Week 1 NFL Injury Report</h3>
                      </a>
                      <p>9/16/2020 | 4 min</p>
                      <p className="text-white">
                        Dr. Chona breaks down the most important injury news for
                        Week 1 around the NFL.import Layout from
                        './../src/components/Layout';
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={`podcast/${3}`}>
                <div className="mt-5">
                  <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                    <div className="podcastImage">
                      <i class="fa-solid fa-play"></i>
                      <img
                        src="/images/UltimateLogo.png"
                        class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                        alt="not fiend"
                      />
                    </div>
                    <div className="col-md-8 col-11 lh-md">
                      <a href="#" className="text-decoration-none">
                        <h3 className="text-white">
                          Kevin Durant - Performance Expectations2
                        </h3>
                      </a>
                      <p>4/17/2020 | 7 min</p>
                      <p className="text-white">
                        Detailed post-injury performance expectations for Kevin
                        Durant.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href={`podcast/${4}`}>
                <div className="mt-5">
                  <div className="podcastBox d-flex justify-content-center align-items-center gap-md-4 gap-2">
                    <div className="podcastImage">
                      <i class="fa-solid fa-play"></i>
                      <img
                        src="/images/UltimateLogo.png"
                        class="img-fluid|thumbnail rounded-top|rounded-end|rounded-bottom|rounded-start|rounded-circle| "
                        alt="not fiend"
                      />
                    </div>
                    <div className="col-md-8 col-11 lh-md">
                      <a href="#" className="text-decoration-none">
                        <h3 className="text-white">
                          Tua Tagovailoa - Injury-by-Injury Breakdown
                        </h3>
                      </a>
                      <p>4/12/2020 | 9 min</p>
                      <p className="text-white">
                        Injury-by-injury breakdown and expectations for Tua
                        Tagovailoa.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Podcast;