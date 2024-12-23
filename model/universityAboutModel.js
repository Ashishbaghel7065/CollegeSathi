import mongoose from "mongoose";

const universityAboutSchema = new mongoose.Schema(
  {
    courses: {
      type: [String],
      required: true,
    },
    ranking: {
      type: Number,
      required: true,
    },
    placement: {
      type: [String],
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    eligibility: {
      type: [String],
      required: true,
    },
    examprocess: {
      type: [String],
      required: true,
    },
    placementpartner: {
      type: [String],
      required: true,
    },
    certification: {
      type: [String],
      required: true,
    },
    universityByAbout: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "university",
    },
  },
  { timestamps: true }
);

const UniversityAbout = mongoose.model("UniversityAbout", universityAboutSchema);
export default UniversityAbout;
