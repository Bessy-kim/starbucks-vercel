import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from "App";
import useQueryParams from 'hooks/useQueryParams';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// css/js
import "./Main.scss";

// components
import SplitEffect from './MainSplit';
import PrdList from 'components/product/PrdList';
import "components/product/PrdList.css";


const Main = () => {
  const { product } = useContext(DataContext);
  const { selectedCate, selectedDepth, pathName } = useQueryParams();

  const [prdSeason, setPrdSeason] = useState([]); // 홀리데이 상품
  useEffect(() => {
    const seasonAll = product.flatMap((el) => {
      const seasonCate = el.products.filter((prd) => prd.name.includes("홀리데이"));
      return seasonCate;
    });
    setPrdSeason(seasonAll); // "홀리데이" 제품만 추출
  }, [product]);

  useEffect(()=>{
    SplitEffect(); //.split
  },[])

  return (
    <>
      <main id="main">
        <section className="main__visual">
          <div className="layout_fix">
            <div className="swiper-visual">
              swiper-visual
            </div>
          </div>
          <div className="split">STARBUCKS</div>
        </section>
        <section className="main__banner">
          banner-img
        </section>
        <section className="main__prd">
          <div className="layout_fix">
            <div className="heading">
              <span className="sub">Season</span>
              <h2 className="tit-em">홀리데이 상품</h2>
            </div>
            <PrdList
              selectedCate={selectedCate}
              selectedDepth={selectedDepth}
              currentData={product} // 현재 데이터 전달
              pathName={pathName}
              prdSeason={prdSeason} // 시즌 상품 (홀리데이 제품) 전달
            />
            {/* selectedCate 확인하기 */}
            <Link to="/menu/product?cate=0" className="btn_link">MORE</Link>
          </div>
        </section>
        <section className="main__res_mz">
          <div className="layout_fix">
            <div className="heading">
              <span className="sub">Reserve Magazine</span>
              <h2 className="tit">리저브 매거진</h2>
              <p className="desc-light">다채로운, 그리고 향기로운 커피 이야기</p>
            </div>
          </div>
        </section>
        <section className="main__res_store">
          <div className="layout_fix">
            <div className="heading">
              <span className="sub-light">Starbucks</span>
              <h2 className="tit">리저브 매장</h2>
              <p className="desc-light">
                내 취향이 머무는 곳,<br />
                취향을 채우는 STARBUCKS RESERVE™ 매장
              </p>
            </div>
          </div>
        </section>
        <section className="main__event">
          <div className="layout_fix">
            <div className="heading">
              <h2 className="tit">이벤트</h2>
            </div>
          </div>
        </section>
        <section className="main__promo">
          <div className="layout_fix">
            <ul className="banner">
              <li><Link to="/"><img src={require("../images/main_promo_banner1.png")}/></Link></li>
              <li><Link to="/"><img src={require("../images/main_promo_banner2.png")}/></Link></li>
            </ul>
            <div className="notice">
              <b>공지</b>
              <Swiper className="swiper_notice"
                  modules={[Autoplay, Navigation, Pagination]}
                  slidesPerView={1}
                  touchRatio={0}
                  direction={"vertical"}
                  autoHeight={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}>
                    <SwiperSlide>
                      <Link to="/">
                        <p className="tit">11111-스마트로 PG(전자결제대행사)를 통한 일부 자동 충전 서비스 종료 사전 안내를 통한 일부 자동 충전 서비스 종료 사전 안내를 통한 일부 자동</p>
                        <span className="date">2024-11-21</span>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link to="/">
                        <p className="tit">22222-스마트로 PG(전자결제대행사)를 통한 일부 자동 충전 서비스 종료 사전 안내</p>
                        <span className="date">2024-11-18</span>
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link to="/">
                        <p className="tit">33333-스마트로 PG(전자결제대행사)를 통한 일부 자동 충전 서비스 종료 사전 안내</p>
                        <span className="date">2024-11-14</span>
                      </Link>
                    </SwiperSlide>
              </Swiper>
              <Link to="/" className="btn_link">더보기 +</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;