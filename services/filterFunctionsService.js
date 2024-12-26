import University from "../model/universitymodel.js";

export const filterByFieldsService = async (req, res) => {
  const filterBy = req.body;

  if (!Array.isArray(filterBy) || filterBy.length === 0) {
    return res
      .status(400)
      .json({ message: "Invalid or empty filter criteria" });
  }

  const combinedFilter = filterBy.reduce((acc, condition) => {
    return { ...acc, ...condition };
  }, {});


  try {
    const filteredArr = await University.aggregate([
      { $match: combinedFilter },
    ]);

    return res
      .status(200)
      .json({ message: "Here's the filtered array", data: filteredArr });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong while filtering", error });
  }
};
