const serviceLocations = [
  {
    shopLocation: "Midas Southgate,\n13252 Eureka Road,\nSouthgate, MI 48195",
    phoneNumber: "734-407-7185",
    email: "midassouthgate@acornauto.org",
    link: "https://www.midas.com/store/mi/southgate/13252-eureka-road-48195/tires?shopnum=6295&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/southgate/13252-eureka-road-48195/offers?shopnum=6295&v=lookup",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6112",
    facebookLink: "https://www.facebook.com/profile.php?id=61555833287625",
    mapLink: "https://maps.app.goo.gl/pEX9tWB3unPXqLeT9",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.6927108241084!2d-83.18625569999999!3d42.19963740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b375d7d479eeb%3A0xbd69d22e546120ac!2s13252%20Eureka%20Rd%2C%20Southgate%2C%20MI%2048195%2C%20USA!5e0!3m2!1sen!2sng!4v1740554333708!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas Brighton,9810 E Grand River Ave Brighton, MI 48116",
    phoneNumber: "810-678-6082",
    email: "midasbrighton@acornauto.org",
    link: "https://www.midas.com/store/mi/brighton/9810-e-grand-river-ave-48116/tires?shopnum=6626&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/brighton/9810-e-grand-river-ave-48116/offers?shopnum=6626&v=lookup",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6112",
    facebookLink: "https://www.facebook.com/profile.php?id=61566137919538",
    mapLink: "hhttps://maps.app.goo.gl/Xb8FUJ1UiLjnYmTe9",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.537084479973!2d-83.7689405!3d42.5226445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88234fe6bf19478b%3A0xe66229ef28df7fb4!2s9810%20E%20Grand%20River%20Ave%2C%20Brighton%2C%20MI%2048116%2C%20USA!5e0!3m2!1sen!2sng!4v1740554636733!5m2!1sen!2sng",
  },
  {
    shopLocation:
      "Midas of Lake Orion,\n591 S Lapeer Road,\nLake Orion, MI 48362",
    phoneNumber: "248-783-6829",
    email: "midaslakeorion@acornauto.org",
    link: "https://www.midas.com/store/mi/lake-orion/591-south-lapeer-road-48362/tires?shopnum=6861&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/lake-orion/591-south-lapeer-road-48362/offers?shopnum=6861",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6861",
    facebookLink: "https://www.facebook.com/profile.php?id=100089322674584",
    mapLink: "https://maps.app.goo.gl/Q3sCDRdVgKUNwGgs5",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d366.1017151495378!2d-83.2643395!3d42.7711447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ecda15611277%3A0x39db527c7a81e73f!2sMidas!5e0!3m2!1sen!2sng!4v1695589415158!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas of Warren,\n32601 Van Dyke Ave,\nWarren, MI 48093",
    phoneNumber: "586-981-0793",
    email: "midaswarren@acornauto.org",
    link: "https://www.midas.com/store/mi/warren/32601-van-dyke-48093/tires?shopnum=6550&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/warren/32601-van-dyke-48093/offers?shopnum=6550",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6550",
    facebookLink: "https://www.facebook.com/profile.php?id=100089258956485",
    mapLink: "https://maps.app.goo.gl/EXopiQU49uys2JFg8",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2940.0183325373982!2d-83.0297132!3d42.53366529999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824da5369ffe933%3A0x2af0442553c1e13a!2sMidas!5e0!3m2!1sen!2sng!4v1695589518194!5m2!1sen!2sng",
  },
  {
    shopLocation:
      "Midas of Madison Heights,\n385 W 12 Mile Road,\n Madison Heights, MI 48071",
    phoneNumber: "248-556-2711",
    email: "midasmadisonhts@acornauto.org",
    link: "https://www.midas.com/store/mi/madison-heights/385-w-12-mile-road-48071/tires?shopnum=6627&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/madison-heights/385-w-12-mile-road-48071/offers?shopnum=6627",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6627",
    facebookLink: "https://www.facebook.com/profile.php?id=100089785682170",
    mapLink: "https://maps.app.goo.gl/poNXB5kLpWmxV7Yh9",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.398022934906!2d-83.1094258!3d42.504348900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824c5636d06f4c3%3A0xd90033ee70548f8d!2sMidas!5e0!3m2!1sen!2sng!4v1695589493900!5m2!1sen!2sng",
  },
  {
    shopLocation:
      "Midas of Rochester,\n746 S Rochester Road,\nRochester, MI 48307",
    phoneNumber: "248-266-2522",
    email: "midasrochester@acornauto.org",
    link: "https://www.midas.com/store/mi/rochester/746-south-rochester-48307/tires?shopnum=6112&v=lookup#tire-shop-modes&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/rochester/746-south-rochester-48307/offers?shopnum=6112",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6112",
    facebookLink: "https://www.facebook.com/profile.php?id=100089653862100",
    mapLink: "https://maps.app.goo.gl/XvNng7HTXiTvdvcXA",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11734.132632496134!2d-83.1318837!3d42.6712474!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e9c57aabdd69%3A0x327331c0ed2e4b7!2sMidas!5e0!3m2!1sen!2sng!4v1695589468228!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas of Novi,\n43421 W 12 Mile Road,\nNovi, MI 48377",
    phoneNumber: "248-504-4925",
    email: "midasnovi@acornauto.org",
    link: "https://www.midas.com/store/mi/novi/43421-west-twelve-mile-road-48377/tires?shopnum=6952&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/novi/43421-west-twelve-mile-road-48377/offers?shopnum=6952",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6952",
    facebookLink: "https://www.facebook.com/profile.php?id=100089672856242",
    mapLink: "https://maps.app.goo.gl/giMV8222mxSSF5w38",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.831451457121!2d-83.4767086!3d42.4951358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824af104d9bc731%3A0x5615c1226b764bd6!2sMidas!5e0!3m2!1sen!2sng!4v1695589447621!5m2!1sen!2sng",
  },
  {
    shopLocation:
      "Midas of Grand Rapids,\n3424 Plainfield Ave NE,\nGrand Rapids, MI 49525",
    phoneNumber: "616-827-7036",
    email: "midasgrandrapids@acornauto.org",
    link: "https://www.midas.com/store/mi/grand-rapids/3424-plainfield-ave-ne-49525/tires?shopnum=6516&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/grand-rapids/3424-plainfield-ave-ne-49525/offers?shopnum=6516",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6516",
    facebookLink: "https://www.facebook.com/profile.php?id=100089127297569",
    mapLink: "https://maps.app.goo.gl/QLp1srcL2MkXgTHLA",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.7866344333374!2d-85.6322742!3d43.024877999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819ab6fe9e3682d%3A0xf100ed9936d46431!2sMidas!5e0!3m2!1sen!2sng!4v1695589374914!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas of Kalamazoo,\n6009 Gull Road,\nKalamazoo, MI 49048",
    phoneNumber: "269-220-3372",
    email: "midaskalamazoo@acornauto.org",
    link: "https://www.midas.com/store/mi/kalamazoo/6009-gull-road-49004/tires?shopnum=6271&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/kalamazoo/6009-gull-road-49004/offers?shopnum=6271",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6271",
    facebookLink: "https://www.facebook.com/profile.php?id=100089121621007",
    mapLink: "https://maps.app.goo.gl/PDQ2CvtsSx6ahYJk9",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.654635644596!2d-85.5120475!3d42.3285645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88178499b2aff619%3A0xd3214c8f20ec7473!2sMidas!5e0!3m2!1sen!2sng!4v1695589350658!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas of Portage,\n5112 S Westnedge Ave,\nPortage, MI 49002",
    phoneNumber: "269-220-3382",
    email: "midasportage@acornauto.org",
    link: "https://www.midas.com/store/mi/portage/5112-s-westnedge-49002/tires?shopnum=6265&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/portage/5112-s-westnedge-49002/offers?shopnum=6265",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6265",
    facebookLink: "https://www.facebook.com/profile.php?id=100089105241992",
    mapLink: "https://maps.app.goo.gl/RGg9BzQHGpcz4h6y7",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d184.60262445572246!2d-85.5928676!3d42.2434609!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88179dee58c5a74f%3A0xdc50ef8f232461ff!2sMidas!5e0!3m2!1sen!2sng!4v1695589241580!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas of Jackson,\n1503 Clinton Ave,\nJackson, MI 49202",
    phoneNumber: "517-879-0565",
    email: "midasjackson@acornauto.org",
    link: "https://www.midas.com/store/mi/jackson/1503-clinton-road-49202/tires?shopnum=6264&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/jackson/1503-clinton-road-49202/offers?shopnum=6264",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6264",
    facebookLink: "https://www.facebook.com/profile.php?id=100089572383461",
    mapLink: "https://maps.app.goo.gl/bFArAmvuV9hr8Fao7",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.5657132498022!2d-84.42264639999999!3d42.266445999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883d2ff187ec14cb%3A0x1006e335a3d70512!2sMidas!5e0!3m2!1sen!2sng!4v1695589205696!5m2!1sen!2sng",
  },
  {
    shopLocation:
      "Midas Grand Rapids,\n2710 28th St. SE,\nGrand Rapids, MI 49512",
    phoneNumber: "616-552-1773",
    email: "midasgrandrapids28@acornauto.org",
    link: "https://www.midas.com/store/mi/grand-rapids/2710-28th-street-se-49512/tires?shopnum=6514&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/grand-rapids/2710-28th-street-se-49512/offers?shopnum=6514",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6514",
    facebookLink: "https://www.facebook.com/profile.php?id=100089482303692",
    mapLink: "https://maps.app.goo.gl/FxaemeE9y7wSBcWQ8",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2922.1363534984675!2d-85.60278502464055!3d42.91216520004389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88184d34f3189d3d%3A0xe14b21c8cf1c2d4a!2sMidas!5e0!3m2!1sen!2sng!4v1695588940397!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas Roseville,\n25525 Gratiot Ave,\nRoseville, MI 48066",
    phoneNumber: "586-221-0190",
    email: "midasroseville@acornauto.org",
    link: "https://www.midas.com/store/mi/ann-arbor/2395-jackson-48103/tires?shopnum=6142&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/ann-arbor/2395-jackson-48103/offers?shopnum=6142",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6142",
    facebookLink: "https://www.facebook.com/profile.php?id=100089191818027",
    mapLink: "https://maps.app.goo.gl/ssVHcSipTN4iFNH39",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.3616122736685!2d-82.94874782466569!3d42.48386432727216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824d783a400d9f3%3A0xe7c9311065659b3!2sMidas!5e0!3m2!1sen!2sng!4v1695589118707!5m2!1sen!2sng",
  },
  {
    shopLocation: "Midas Alpine,\n2360 Alpine Ave NW,\nGrand Rapids, MI 49544",
    phoneNumber: "616-426-8124",
    email: "midasalpine@acornauto.org",
    link: "https://www.midas.com/store/mi/grand-rapids/2360-alpine-avenue-northwest-49544/tires?shopnum=6885&v=lookup#tire-shop-modes",
    couponLink:
      "https://www.midas.com/store/mi/grand-rapids/2360-alpine-avenue-northwest-49544/offers?shopnum=6885",
    financingLink:
      "https://www.midas.com/about-midas/midas-credit-card-service-financing?shopnum=6885",
    facebookLink: "",
    mapLink: "https://maps.app.goo.gl/UM2AcbLGCGERoTu36",
    iframe:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.7130194738156!2d-85.69061552463504!3d43.00537709408993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819aea61c734f11%3A0x3fba768ef90c317b!2sMidas!5e0!3m2!1sen!2sng!4v1695589163939!5m2!1sen!2sng",
  },
];

export default serviceLocations;
