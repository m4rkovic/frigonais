import React from "react";
import Carousel from "../components/Carousel/Carousel";
import YoutubeEmbed from "../components/YoutubeEmbed/YoutubeEmbed ";
import "./Home.css";

import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { MdLocationPin } from "react-icons/md";
import image1 from "../assets/images/about/image1.jpg";
import image2 from "../assets/images/about/image2.jpg";
import image3 from "../assets/images/img-sustain.jpg";
import sert1 from "../assets/images/sertifiakt/fssc.png";
import sert2 from "../assets/images/sertifiakt/haccp.png";
import sert3 from "../assets/images/sertifiakt/kosher.png";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAdMXKh3EE_ouFU-JXzeNnNlgrpMPiOJxQ",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <div id="home"></div>
      <Carousel />
      <div className="break">
        <span className="slogan">Priroda I Mi</span>
      </div>
      <div className="home-container">
        <div class="flex-child" id="video">
          <YoutubeEmbed embedId="kDEvCohTT34" />
        </div>
        <div class="flex-child" id="intro-text">
          <p className="intro-text text-container ">{t("intro")}</p>
        </div>
      </div>
      <div className="break">{t("about")}</div>
      <div class="about-container" id="about">
        <div class="flex-container">
          <div class="flex-child" id="production-image">
            <img src={image1} className="about-image" />
          </div>
          <div class="flex-child" id="production">
            <h2>{t("productionProgram")}</h2>
            <br />
            <p>{t("productionProgramText")}</p>
          </div>
        </div>
        <div class="flex-container">
          <div class="flex-child">
            <h2>{t("goals")}</h2>
            <br />
            <p>{t("goalsText1")}</p>
            <br />
            <p>{t("goalsText2")}</p>
            <br />
            <p>{t("goalsText3")}</p>
          </div>

          <div class="flex-child">
            <img src={image2} className="about-image" />
          </div>
        </div>
        <div class="flex-container">
          <div class="flex-child" id="sustainability">
            <h2>{t("sustainability")}</h2>
            <br />
            <p>{t("sustainabilityText1")}</p>
            <br />
            <p>{t("sustainabilityText2")}</p>
          </div>
          <div class="flex-child" id="sustainability-image">
            <img src={image3} className="about-image" />
          </div>
        </div>

        {/* Sertifikati */}
        <div class="flex-container">
          <div class="flex-child-cert">
            <img src={sert3} className="certificate-image" />
          </div>
          <div class="flex-child">
            <img src={sert1} className="certificate-image" />
          </div>
          <div class="flex-child">
            <img src={sert2} className="certificate-image" />
          </div>
        </div>
      </div>
      <div className="break">{t("contact")}</div>
      <div className="container" id="contact">
        <div className="maps-container">
          <div className="location-info">
            <MapOne />
            <br />
            <p>Friongais</p>
            <p>
              <MdLocationPin />
              Niš, Serbia
            </p>
            <p>Tel: 018 259-044</p>
            <a href="mailto:name@rapidtables.com">frigonais@gmail.com </a>
          </div>

          <div className="location-info">
            <MapTwo />
            <br />
            <p>Frigonais Proizvodnja</p>
            <p>
              <MdLocationPin />
              Kuršumlija, Serbia
            </p>
            <p>Tel: 027 381-751</p>
            <a href="mailto:name@rapidtables.com">
              frigonaiskursumlija@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
function MapOne() {
  const center = useMemo(
    () => ({ lat: 43.322854364829915, lng: 21.89842593710418 }),
    []
  );
  return (
    <>
      <GoogleMap
        zoom={17}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}

function MapTwo() {
  const center = useMemo(
    () => ({ lat: 43.13804725167905, lng: 21.283811558375586 }),
    []
  );
  return (
    <>
      <GoogleMap
        zoom={17}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}

export default Home;
