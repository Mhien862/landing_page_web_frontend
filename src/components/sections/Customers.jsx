import React from "react";
import { Typography } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title } = Typography;

const customers = [
  {
    name: "Link House",
    logo: "https://dichvulandingpage.com/wp-content/uploads/2022/11/logo-khach-hang-ccomedia8-150x150.png",
  },
  {
    name: "Ngoc Dung Beauty Center",
    logo: "https://dichvulandingpage.com/wp-content/uploads/2022/11/logo-khach-hang-ccomedia9-150x150.png",
  },
  {
    name: "Yersin University",
    logo: "https://dichvulandingpage.com/wp-content/uploads/2022/11/logo-khach-hang-ccomedia10-150x150.png",
  },
  {
    name: "Sonadezi College",
    logo: "https://dichvulandingpage.com/wp-content/uploads/2022/11/logo-khach-hang-ccomedia11-150x150.png",
  },
  {
    name: "Seoul Spa",
    logo: "https://dichvulandingpage.com/wp-content/uploads/2022/11/logo-khach-hang-ccomedia12-150x150.png",
  },
  {
    name: "Ding Tea",
    logo: "https://dichvulandingpage.com/wp-content/uploads/2022/11/logo-khach-hang-ccomedia1-150x150.png",
  },
  {
    name: "Ding Tea",
    logo: "https://dichvulandingpage.com/wp-content/uploads/2022/11/logo-khach-hang-ccomedia3-150x150.png",
  },
];

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "50px 5%" }}>
      <Title
        level={2}
        style={{ textAlign: "center", marginBottom: "50px", color: "#1677ff" }}
      >
        KHÁCH HÀNG CỦA CHÚNG TÔI
      </Title>

      <Slider {...settings}>
        {customers.map((customer, index) => (
          <div key={index} style={{ padding: "0 15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100px",
              }}
            >
              <img
                src={customer.logo}
                alt={customer.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "80px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-dots li button:before {
          color: #1677ff;
        }
        .slick-dots li.slick-active button:before {
          color: #1677ff;
        }
        .slick-prev:before,
        .slick-next:before {
          color: #1677ff;
        }
      `}</style>
    </div>
  );
};

export default Customers;
