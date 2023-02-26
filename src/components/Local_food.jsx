import React from "react";
import Resturant from "./Resturant";
import Image from "./Image";
import Description from "./Description";
const Local_food = () => {
return(
    <div className="container">
        <div className="Card">
            <Image img = "https://tse1.mm.bing.net/th?id=OIP.L56Hnj1ShB0UTxOnvwH3bAHaDk&pid=Api"/>
            <Resturant name = "Tasty Dumpling"/>
            <Description desc = " Great for Cheap Dumplings!" />
            <a href="https://qmenu.us/#/tasty-dumpling-new-york/menu/0/details"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse3.mm.bing.net/th?id=OIP.m4_fyVcFbgoUBj0J4IQq9AHaE8&pid=Api"/>
            <Resturant name = "Mei Lai Wah"/>
            <Description desc = "Delicious pineapple pork buns!" />
            <a href="https://www.meilaiwah.com/menu"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse2.mm.bing.net/th?id=OIP.4psyO7XtYuEDD1rzeVc0mgHaE7&pid=Api"/>
            <Resturant name = "Nom Wah Tea Parlor"/>
            <Description desc = "Great Dim Sum Place" />
            <a href="http://nomwah.com/chinatown/"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse1.mm.bing.net/th?id=OIP.BSh5XHfGlNybjor_xNe0mAHaFj&pid=Api"/>
            <Resturant name = "Tasty Hand-Pulled Noodles"/>
            <Description desc = "Tasty and large bowls of noodles!" />
            <a href="https://www.beyondmenu.com/28640/new-york/tasty-hand-pulled-noodles-new-york-10013.aspx?utm_source=satellite&utm_campaign=polaris&utm_medium=hero-view-menu-link&utm_mode=light&utm_color=beyondmenu&utm_template=FORSYTHIA"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse4.mm.bing.net/th?id=OIP.AiCLqgdJ1sAGhJBtHZ0xdQHaE7&pid=Api"/>
            <Resturant name = "Taiwan Pork Chop House"/>
            <Description desc = "Great Taiwan Food" />
            <a href="https://www.taiwanporkchop.com/menu"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse4.mm.bing.net/th?id=OIP.NaAhz9SaL-ruRmPY5wr39QHaFj&pid=Api"/>
            <Resturant name = "Wah Fung Fast Food"/>
            <Description desc = "Large and Cheap Portions of roast pork" />
            <a href="https://www.sirved.com/restaurant/new_york-new_york-usa/wah-fung-fast-food/792056/menus"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse1.mm.bing.net/th?id=OIP.BPdwcYNWm8rRXWcf-Lq04gHaEF&pid=Api"/>
            <Resturant name = "Kong Sihk Tong"/>
            <Description desc = "Perfect Spot for Hong Kong Food" />
            <a href="https://www.yelp.com/menu/kong-sihk-tong-%E6%B8%AF%E9%A3%9F%E5%A0%82-new-york"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse2.mm.bing.net/th?id=OIP.TvtSrI8QOk_YoFv_FoPwxAHaEG&pid=Api"/>
            <Resturant name = "Funny BBQ 98"/>
            <Description desc = "Nice Spot for BBQ sticks" />
            <a href="https://order.mealkeyway.com/customer/release/index?mid=597a704f7a47394568377547685851723362774e75773d3d#/main"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse1.mm.bing.net/th?id=OIP.qa1UgmozMAKA_-jmsaaBZwHaE8&pid=Api"/>
            <Resturant name = "Ajisen Ramen"/>
            <Description desc = "Tasty bowls of ramen" />
            <a href="https://www.ajisenramennyc.com/#chinatown-menu"><button>View Menu</button></a>
        </div>
        <div className="Card">
            <Image img = "https://tse1.mm.bing.net/th?id=OIP.TT00mj6nvzKR9ucVnblVmAHaJ4&pid=Api"/>
            <Resturant name = "Original Chinatown Ice Cream Factory"/>
            <Description desc = "Great spot for ice cream!" />
            <a href="http://places.singleplatform.com/chinatown-ice-cream-factory/menu?ref=google"><button>View Menu</button></a>
        </div>
    </div>
)
}
export default Local_food