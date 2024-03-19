import List from "../components/List/List";
import { NEWS } from "../data/dummy-data";

function WorldNewsScreen() {
    const type = "World";
    const displayedNews = NEWS.filter((newsItem) => {
        return newsItem.type === type;
    });
    return <List items={displayedNews} />
}

export default WorldNewsScreen;