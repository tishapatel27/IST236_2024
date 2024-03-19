import List from "../components/List/List"; // Import the List component
import { NEWS } from "../data/dummy-data"; // Import the dummy data NEWS array

// Define the FocusedNewsScreen component
function FocusedNewsScreen() {
    // Define the type of news to focus on
    const type = "Fashion";
    
    // Filter the NEWS array to get only the news items of the specified type
    const displayedNews = NEWS.filter((newsItem) => {
        return newsItem.type === type;
    });
    
    // Render the List component with the filtered news items
    return <List items={displayedNews} />;
}

// Export the FocusedNewsScreen component
export default FocusedNewsScreen;
