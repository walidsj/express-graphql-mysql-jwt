const DataLoader = require("dataloader");
const { School } = require("../../models");

const batchLevelIds = new DataLoader(async (levelIds) => {
	// // Get all roles
	const schools = await School.findAll({ where: { levelId: levelIds } });

	const mappedSchools = levelIds.map((id) =>
		schools.filter((school) => school.levelId === Number(id))
	);
	return Promise.resolve(mappedSchools);
});

module.exports = batchLevelIds;
