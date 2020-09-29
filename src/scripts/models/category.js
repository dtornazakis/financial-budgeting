const Category = ({ Name: name, ParentId: parentId, Id }) => {

	const id = Id();
	return Object.freeze({
		id,
		name,
		parentId
	});
};

export default Category;