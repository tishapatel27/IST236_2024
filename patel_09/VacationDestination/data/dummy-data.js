import Country from "../models/countries";
import Destination from "../models/destinations";


export const COUNTRIES = [
  new Country("c1", "India", "#c4a8cb"), // light purple
    new Country("c2", "UAE", "#b19cd9"), // lavender
    new Country("c3", "Switzerland", "#d4bbed"), // pastel purple
    new Country("c4", "Greece", "#c9a0dc"), // lilac
    new Country("c5", "Canada", "#d7aefb"), // mauve
    new Country("c6", "Italy", "#deb3d8"), // orchid
    new Country("c7", "Australia", "#decfe2"), // pale purple
    new Country("c8", "Japan", "#b0a6ca"), // wisteria
    new Country("c9", "Mexico", "#d0a1e0"), // soft purple
    new Country("c10", "Turkey", "#c5b3e6"), // pastel lavender
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "New Delhi: The Taj Mahal",
    "$553",
    1632,
    5.0,
    "https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
    "The Taj Mahal, an architectural marvel, stands as a symbol of undying love. Its exquisite ivory facade, intricate details, and serene surroundings create a mesmerizing aura. A testament to human creativity, it remains a cherished wonder, captivating hearts with its timeless elegance."
  ),
  new Destination(
    "d2",
    "c1",
    "Gujarat: Statue of Unity",
    "$400",
    2013,
    5.0,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOG6uAdoJ5IY9N7eYowNLcU6vOnkyNWhIOSQ&usqp=CAU",
    "The Statue of Unity, standing as the world's tallest statue at 182 meters, pays tribute to India's iconic leader Sardar Vallabhbhai Patel, embodying unity, strength, and the nation's rich legacy."
  ),
  new Destination(
    "d3",
    "c2",
    "Dubai",
    "$3,472",
    1833,
    4.9,
    "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
    "Dubai, a dazzling metropolis in the United Arab Emirates, boasts futuristic architecture, luxury shopping, and iconic landmarks such as the Burj Khalifa. A global business hub, it harmonizes tradition with modernity, offering a unique blend of culture, commerce, and opulence."
  ),
  new Destination(
    "d4",
    "c2",
    "Abu Dhabi",
    "$1,500",
    1761,
    4.9,
    "https://www.adro.gov.ae/-/media/Project/Expat-Bureau/Expat-Bureau/AD1_5New/AboutAD/HistoryofAD/TimelineofAD3.jpg?h=916&w=1080&hash=043283D876C8D94F836F65453D01EFE9",
    "Abu Dhabi, the capital of the United Arab Emirates, epitomizes grandeur with its modern skyline, cultural institutions like the Louvre Abu Dhabi, and the majestic Sheikh Zayed Grand Mosque. A thriving hub for business and tourism, it showcases a harmonious blend of tradition and innovation."
  ),
  new Destination(
    "d5",
    "c3",
    "Interlaken",
    "$3,348",
    1130,
    4.0,
    "https://cdn.audleytravel.com/3663/2616/79/15986030-interlaken.jpg",
    "Nestled between Lake Thun and Lake Brienz, Interlaken in Switzerland is a breathtaking haven. Surrounded by the Alps, it's a gateway to adventure, offering stunning landscapes, outdoor activities, and a charming town center."
  ),
  new Destination(
    "d6",
    "c3",
    "Zurich",
    "$1,940",
    "15BC",
    4.8,
    "https://www.allthingsdistributed.com/images/zurich-region-banner-small.jpg",
    "Zurich, Switzerland's largest city, is a global financial hub nestled along the Limmat River. Renowned for its cleanliness, efficiency, and cultural richness, Zurich offers a picturesque Old Town, world-class museums, and a vibrant culinary scene amid the stunning backdrop of the Swiss Alps."
  ),
  new Destination(
    "d7",
    "c4",
    "Santorini",
    "$1800",
    "16BC",
    4.8,
    "https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1563449509.jpg?auto=format&w=1440&h=810&fit=crop&q=75",
    "Santorini, a stunning Greek island in the Aegean Sea, is renowned for its iconic white-washed buildings, blue-domed churches, and breathtaking sunsets. Shaped by volcanic history, its charm, crystal-clear waters, and vibrant culture attract visitors worldwide."
  ),
  new Destination(
    "d8",
    "c4",
    "Mykonos",
    "$1,126",
    "15BC",
    4.1,
    "https://a.cdn-hotels.com/gdcs/production44/d14/75a0e859-0146-4d78-8097-211d5ce89278.jpg?impolicy=fcrop&w=800&h=533&q=medium",
    "Mykonos, a captivating Greek island in the Aegean Sea, is celebrated for its vibrant nightlife, picturesque white architecture, and pristine beaches. A popular destination, it blends traditional charm with cosmopolitan energy, enchanting visitors with its unique allure."
  ),
  new Destination(
    "d9",
    "c5",
    "Vancouver",
    "$2000",
    1886,
    4.5,
    "https://media.nomadicmatt.com/2022/vancouverguide2.jpeg",
    "Vancouver, a dynamic city in British Columbia, Canada, is nestled between mountains and the Pacific Ocean. Known for its diverse culture, stunning natural scenery, and a thriving arts scene, Vancouver is a cosmopolitan hub with a strong emphasis on outdoor activities and sustainability."
  ),
  new Destination(
    "d10",
    "c5",
    "Niagara Falls",
    "$1,735",
    1678,
    4.9,
    "https://imageio.forbes.com/specials-images/imageserve/62e5761e62f4cf7f929932d6/0x0.jpg?format=jpg&height=600&width=1200&fit=bounds",
    "Niagara Falls, located on the border of Canada and the United States, is a world-famous natural wonder. The falls consist of three waterfalls—Horseshoe Falls, American Falls, and Bridal Veil Falls—flowing with immense power over the Niagara River. The site attracts millions of visitors annually, offering breathtaking views and a range of attractions."
  ),
  new Destination(
    "d11",
    "c6",
    "Rome",
    "$1500",
    "753 BC",
    4.8,
    "https://thesavvybackpacker.com/wp-content/uploads/2018/11/rome-travel-costs-price-guide.jpg",
    "Rome, the capital of Italy, is a city steeped in history, art, and culture. Home to iconic landmarks such as the Colosseum, Roman Forum, and Vatican City, Rome is a living museum with a rich legacy dating back thousands of years."
  ),
  new Destination(
    "d12",
    "c6",
    "Venice",
    "$1,736",
    "421 AD",
    4.9,
    "https://www.fodors.com/wp-content/uploads/2019/11/HERO_Venice__FloatingCityBuilt_iStock-986940360.jpg",
    "Venice, an enchanting city in northeastern Italy, is renowned for its picturesque canals, historic architecture, and cultural richness. Built on a network of islands, Venice is a UNESCO World Heritage Site, featuring landmarks like St. Mark's Basilica and the Grand Canal."
  ),
  new Destination(
    "d13",
    "c7",
    "Melbourne",
    "$5,309",
    "1835",
	4.8,
    "https://www.aeccglobal.com/images/easyblog_articles/112/8-Optimized-shutterstock_274387127.jpg",
	"Melbourne, Australia's second-largest city, is a vibrant cultural hub known for its diverse arts scene, coffee culture, and eclectic architecture. With parks, galleries, and a dynamic culinary landscape, Melbourne offers a blend of creativity and urban sophistication."
  ),
  new Destination(
    "d14",
    "c7",
    "Sydney",
    "$2,500",
    1788,
    4.0,
    "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_1280,c_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg",
    "Sydney, Australia's largest city, is a global metropolis known for the iconic Sydney Opera House and the Sydney Harbour Bridge. With stunning beaches, vibrant neighborhoods, and a thriving arts and dining scene, Sydney encapsulates a harmonious blend of natural beauty and urban sophistication."
  ),
  new Destination(
    "d15",
    "c8",
    "Tokyo",
    "$1,119",
    "1889",
    4.5,
    "https://content.r9cdn.net/rimg/dimg/ca/7e/9ae1c4b2-city-21033-16da67ba87a.jpg?width=1366&height=768&xhint=2534&yhint=2206&crop=true",
	"Tokyo, Japan's capital, is a bustling metropolis blending tradition and modernity. Known for its cutting-edge technology, vibrant street fashion, historic temples, and diverse culinary scene, Tokyo stands as a dynamic and culturally rich global city."
  ),
  
  new Destination(
    "d16",
    "c8",
    "Nikko",
    "$1,180",
    "766 AD",
    3.8,
    "https://images.ctfassets.net/2tgq3wsc42ke/6ggJv6kC0DYdAZUC8BOAMB/14490e596acc57c750af2cfdaf8b05d8/img_dis_his-cul_keyimage.jpg",
    "Nikko, Japan, is a serene town known for its UNESCO World Heritage sites, including Toshogu Shrine and the stunning natural beauty of Nikko National Park. Rich in history, culture, and surrounded by lush landscapes, Nikko is a peaceful retreat from urban life."
  ),
  new Destination(
    "d17",
    "c9",
    "Cancun",
    "$1,500",
    "1970",
    4.6,
    "https://www.villapalmarcancun.com/blog/wp-content/uploads/elementor/thumbs/security-update-cancun-and-riviera-maya-by-travel-state-government-o6f9jb5h2f5aaacxt4j6yb1aizwizp2t8o9c2bjfy0.jpg",
	"Cancun, a Mexican resort city on the Yucatán Peninsula, is famous for its pristine beaches, turquoise waters, and vibrant nightlife. A popular destination, it offers a mix of relaxation, water activities, and cultural experiences in the heart of the Mayan Riviera."
  ),
  
  new Destination(
    "d18",
    "c9",
    "Cabo San Lucas",
    "$1,300",
    1788,
    4.9,
    "https://afar.brightspotcdn.com/dims4/default/c5d02ba/2147483647/strip/true/crop/4056x2152+0+444/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2Fd0%2F27%2Ffc97fbc8457c95a1515664743a2a%2Fvictor-hughes-qsp5umrfplw-unsplash.jpg",
	"Cabo San Lucas, situated at the southern tip of Mexico's Baja California Peninsula, is a renowned coastal destination. Known for its stunning beaches, vibrant nightlife, and iconic rock formations like the Arch of Cabo San Lucas, it attracts visitors seeking relaxation and adventure in a picturesque setting."
  ),
  new Destination(
    "d19",
    "c10",
    "Istanbul",
    "$3,896",
    "7 BCE",
    4.5,
    "https://www.roadiscalling.com/wp-content/uploads/Is-Istanbul-Expensive-3.jpg",
    "Istanbul, Turkey's transcontinental city, spans Europe and Asia. Formerly Byzantium and Constantinople, it boasts a rich history, blending ancient architecture, such as the Hagia Sophia and Blue Mosque, with bustling markets, like the Grand Bazaar. Istanbul is a vibrant fusion of cultures, connecting the East and the West."
  ),
  new Destination(
    "d20",
    "c10",
    "Cappadocia",
    "$700",
    "6 BCE",
    4.9,
    "https://assets3.thrillist.com/v1/image/3109501/2880x1620/crop;webp=auto;jpeg_quality=60;progressive.jpg",
    "Cappadocia, a captivating region in central Turkey, is renowned for its unique lunar-like landscapes, cave dwellings, and fairy-tale chimneys. Rich in history, it features ancient underground cities and rock-cut churches, making it a surreal and enchanting destination. Cappadocia is also famous for its hot air balloon rides, providing breathtaking views of the otherworldly terrain."
  ),
];

