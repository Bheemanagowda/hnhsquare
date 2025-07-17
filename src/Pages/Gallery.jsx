import React from "react";
import Collections from "../components/Collections";
import Breadcrumb from "../components/Breadcrumb";
import breadcrumbBg from "../assets/images/bg/innerbg1.jpg";

import BathroomPartition1 from "../assets/images/gallery/bathroom-partition/1.jpg";
import BathroomPartition2 from "../assets/images/gallery/bathroom-partition/2.jpg";
import BathroomPartition3 from "../assets/images/gallery/bathroom-partition/3.jpg";
import LedMirror1 from "../assets/images/gallery/led-mirror/1.jpg";
import LedMirror2 from "../assets/images/gallery/led-mirror/2.jpg";
import LedMirror3 from "../assets/images/gallery/led-mirror/3.jpg";
import OfficePartition1 from "../assets/images/gallery/office-partition/1.jpg";
import OfficePartition2 from "../assets/images/gallery/office-partition/2.jpg";
import OfficePartition3 from "../assets/images/gallery/office-partition/3.jpg";
import OpenShutters1 from "../assets/images/gallery/open-shutters/1.jpg";
import OpenShutters2 from "../assets/images/gallery/open-shutters/2.jpg";
import OpenShutters3 from "../assets/images/gallery/open-shutters/3.jpg";
import PoojDoors1 from "../assets/images/gallery/pooja-doors/1.jpg";
import PoojDoors2 from "../assets/images/gallery/pooja-doors/2.jpg";
import PoojDoors3 from "../assets/images/gallery/pooja-doors/3.jpg";
import ProfileDoors1 from "../assets/images/gallery/profile-door/1.jpg";
import ProfileDoors2 from "../assets/images/gallery/profile-door/2.jpg";
import ProfileDoors3 from "../assets/images/gallery/profile-door/3.jpg";
import ProfileShowcase1 from "../assets/images/gallery/profile-showcase/1.jpg";
import ProfileShowcase2 from "../assets/images/gallery/profile-showcase/2.jpg";
import ProfileShowcase3 from "../assets/images/gallery/profile-showcase/3.jpg";
import SlidingDoor1 from "../assets/images/gallery/sliding-door-for-room-entrance/1.jpg";
import SlidingDoor2 from "../assets/images/gallery/sliding-door-for-room-entrance/2.jpg";
import SlidingDoor3 from "../assets/images/gallery/sliding-door-for-room-entrance/3.jpg";
import WalkinCloset1 from "../assets/images/gallery/walkin-closet/1.jpg";
import WalkinCloset2 from "../assets/images/gallery/walkin-closet/2.jpg";
import WalkinCloset3 from "../assets/images/gallery/walkin-closet/3.jpg";
import WardrobeSlidingDoors1 from "../assets/images/gallery/wardrobe-sliding-door/1.jpg";
import WardrobeSlidingDoors2 from "../assets/images/gallery/wardrobe-sliding-door/2.jpg";
import WardrobeSlidingDoors3 from "../assets/images/gallery/wardrobe-sliding-door/3.jpg";
import UnderlineOnly from "../components/UnderlineOnly";

const categorizedImages = {
  "Bathroom Partitions": [
    { id: 1, image: BathroomPartition1 },
    { id: 2, image: BathroomPartition2 },
    { id: 3, image: BathroomPartition3 },
  ],
  "LED Mirrors": [
    { id: 4, image: LedMirror1 },
    { id: 5, image: LedMirror2 },
    { id: 6, image: LedMirror3 },
  ],
  "Office Partitions ": [
    { id: 7, image: OfficePartition1 },
    { id: 8, image: OfficePartition2 },
    { id: 9, image: OfficePartition3 },
  ],
  "Open Shutters": [
    { id: 10, image: OpenShutters1 },
    { id: 11, image: OpenShutters2 },
    { id: 12, image: OpenShutters3 },
  ],
  "Pooja Doors": [
    { id: 13, image: PoojDoors1 },
    { id: 14, image: PoojDoors2 },
    { id: 15, image: PoojDoors3 },
  ],
  "Profile Doors": [
    { id: 13, image: ProfileDoors1 },
    { id: 14, image: ProfileDoors2 },
    { id: 15, image: ProfileDoors3 },
  ],
  "Profile Showcase ": [
    { id: 13, image: ProfileShowcase1 },
    { id: 14, image: ProfileShowcase2 },
    { id: 15, image: ProfileShowcase3 },
  ],
  "Sliding Door For Room Entrance ": [
    { id: 13, image: SlidingDoor1 },
    { id: 14, image: SlidingDoor2 },
    { id: 15, image: SlidingDoor3 },
  ],
  "Walk-In Closet ": [
    { id: 13, image: WalkinCloset1 },
    { id: 14, image: WalkinCloset2 },
    { id: 15, image: WalkinCloset3 },
  ],
  "Wardrobe Sliding Doors ": [
    { id: 13, image: WardrobeSlidingDoors1 },
    { id: 14, image: WardrobeSlidingDoors2 },
    { id: 15, image: WardrobeSlidingDoors3 },
  ],
};

const Gallery = () => {
  return (
    <div>
      <Breadcrumb
        pageTitle="Gallery"
        backgroundImage={breadcrumbBg}
        className=""
      />
      <div className="container">
        <div className="gallery-page  p-space">
          <h2 className="text-center title mb-4">
            Our <span className="color-text">Gallery</span>
          </h2>
          <UnderlineOnly className="mb-4" />
          {Object.entries(categorizedImages).map(([category, images]) => (
            <div key={category} className="mb-5">
              <h4 className="mb-4 category-title">{category}</h4>
              <hr className="mb-4" />
              <Collections
                images={images}
                columnClass="col-md-4 mb-4"
                layoutType="gallery"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
