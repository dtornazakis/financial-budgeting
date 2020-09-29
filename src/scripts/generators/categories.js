import { GenerateId } from './../helpers/core';
import Category from './../models/category';

const foodAndDrinks = Category({ Name: "Food & drinks", Id: GenerateId });
const shopping = Category({ Name: "Shopping", Id: GenerateId });
const housing = Category({ Name: "Housing", Id: GenerateId });
const transportation = Category({ Name: "Transportation", Id: GenerateId });
const vehicle = Category({ Name: "Vehicle", Id: GenerateId });
const lifeAndEntertainment = Category({ Name: "Life & entertainment", Id: GenerateId });
const communicationPc = Category({ Name: "Communication & PC", Id: GenerateId });
const financialExpenses = Category({ Name: "Financial expenses", Id: GenerateId });
const investments = Category({ Name: "Investments", Id: GenerateId });
const income = Category({ Name: "Income", Id: GenerateId });
const other = Category({ Name: "Other", Id: GenerateId });

const categories = [
	foodAndDrinks,
	shopping,
	housing,
	transportation,
	vehicle,
	lifeAndEntertainment,
	communicationPc,
	financialExpenses,
	investments,
	income,
	other
];

const nestedCategories = [
	{ 	
		category: foodAndDrinks,
		subcategories: [
			Category({ Name: "Groceries", ParentId: foodAndDrinks.id, Id: GenerateId }),
			Category({ Name: "Cafe", ParentId: foodAndDrinks.id, Id: GenerateId }),
			Category({ Name: "Bar", ParentId: foodAndDrinks.id, Id: GenerateId }),
			Category({ Name: "Restaurant", ParentId: foodAndDrinks.id, Id: GenerateId }),
			Category({ Name: "Fast food", ParentId: foodAndDrinks.id, Id: GenerateId })
		] 
	},
	{ 	
		category: shopping,
		subcategories: [
			Category({ Name: "Clothes & shoes", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Drug-store, Chemist", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Electronics", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Free time", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Gifts", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Beauty", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Home", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Jewels, accessories", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Kids", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Pets, animals", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Stationary", ParentId: shopping.id, Id: GenerateId }),
			Category({ Name: "Tools", ParentId: shopping.id, Id: GenerateId })
		]
	},
	{ 	
		category: housing,
		subcategories: [
			Category({ Name: "Utilities", ParentId: housing.id, Id: GenerateId }),
			Category({ Name: "Maintenance, repairs", ParentId: housing.id, Id: GenerateId }),
			Category({ Name: "Mortgage", ParentId: housing.id, Id: GenerateId }),
			Category({ Name: "Property insurance", ParentId: housing.id, Id: GenerateId }),
			Category({ Name: "Rent", ParentId: housing.id, Id: GenerateId }),
			Category({ Name: "Services", ParentId: housing.id, Id: GenerateId })
		] 
	},
	{ 	
		category: transportation,
		subcategories: [
			Category({ Name: "Business trips", ParentId: transportation.id, Id: GenerateId }),
			Category({ Name: "Long distance", ParentId: transportation.id, Id: GenerateId }),
			Category({ Name: "Public transportation", ParentId: transportation.id, Id: GenerateId }),
			Category({ Name: "Taxi", ParentId: transportation.id, Id: GenerateId })
		]
	},
	{ 	
		category: vehicle,
		subcategories: [
			Category({ Name: "Fuel", ParentId: vehicle.id, Id: GenerateId }),
			Category({ Name: "Leasing", ParentId: vehicle.id, Id: GenerateId }),
			Category({ Name: "Parking", ParentId: vehicle.id, Id: GenerateId }),
			Category({ Name: "Rentals", ParentId: vehicle.id, Id: GenerateId }),
			Category({ Name: "Vehicle insurance", ParentId: vehicle.id, Id: GenerateId }),
			Category({ Name: "Vehicle maintenance", ParentId: vehicle.id, Id: GenerateId })
		]
	},
	{ 	
		category: lifeAndEntertainment,
		subcategories: [
			Category({ Name: "Active sport, fitness", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Alcohol, tobacco", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Books, audio, subscriptions", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Charity, gifts", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Culture, sport events", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Education, development", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Health care, doctor", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Hobbies", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Holiday trips, hotels", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Life events", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Lottery, gambling", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "TV, streaming", ParentId: lifeAndEntertainment.id, Id: GenerateId }),
			Category({ Name: "Wellness, beauty", ParentId: lifeAndEntertainment.id, Id: GenerateId })
		]
	},
	{ 	
		category: communicationPc,
		subcategories: [
			Category({ Name: "Internet", ParentId: communicationPc.id, Id: GenerateId }),
			Category({ Name: "Phone, cell phone", ParentId: communicationPc.id, Id: GenerateId }),
			Category({ Name: "Postal services", ParentId: communicationPc.id, Id: GenerateId }),
			Category({ Name: "software, apps, games", ParentId: communicationPc.id, Id: GenerateId })
		] 
	},
	{ 	
		category: financialExpenses,
		subcategories: []
	},
	{ 	
		category: investments,
		subcategories: []
	},
	{ 	
		category: income,
		subcategories: [
			Category({ Name: "Checks, coupons", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Child support", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Dues & grants", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Gifts", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Interests, dividends", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Lending, renting", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Lottery, gambling", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Refunds (tax, purchase)", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Rental income", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Sale", ParentId: income.id, Id: GenerateId }),
			Category({ Name: "Wage, invoices", ParentId: income.id, Id: GenerateId })
		] 
	},
	{ 	
		category: other,
		subcategories: []
	}
];

categories.push()
export { categories, nestedCategories };

export default categories;