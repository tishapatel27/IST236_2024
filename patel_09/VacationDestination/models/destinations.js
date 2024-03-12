class Destination {
  // Constructor to initialize a new Destination object
  constructor(id, countryId, name, vCost, foundedYear, rating, imageUrl, desc) {
      this.id = id; // Unique identifier for the destination
      this.countryId = countryId; // ID of the country to which the destination belongs
      this.name = name; // Name of the destination
      this.vCost = vCost; // Average cost of visiting the destination
      this.foundedYear = foundedYear; // Year when the destination was founded or established
      this.rating = rating; // Average rating of the destination
      this.imageUrl = imageUrl; // URL of the image representing the destination
      this.description = desc; // Description or additional information about the destination
  }

  // Method to convert the Destination object to a string representation
  toString() {
      return `${this.desc}`; // Returns the description of the destination
  }
}

export default Destination; // Export the Destination class
