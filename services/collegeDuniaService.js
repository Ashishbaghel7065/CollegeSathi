import University from "../model/universitymodel.js";

export const getAllCards = async (req, res) => {
  try {
    const cards = await University.find();
    res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cards",
      error: error.message,
    });
  }
};

export const updateAllCards = async (req, res) => {
  try {
    const cards = await University.updateMany();
    res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch cards",
      error: error.message,
    });
  }
};
export async function handlerCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.title ||
    !body.location ||
    !body.rank ||
    !body.fees ||
    !body.courses ||
    !body.facilities ||
    !body.alumni
  ) {
    return res
      .status(400)
      .json({ msg: "Some of your  fields doesnot not exist" });
  }

  const collegeResult = await University.create({
    title: res.body.title,
    location: body.location,
    rank: body.rank,
    fees: body.fees,
    courses: body.courses,
    facilities: body.facilities,
    alumini: body.alumni,
  });

  res.status(201).json({ msg: "document created" + collegeResult });
}
