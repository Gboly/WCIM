import cloudinary from "../config/cloudinaryConfig.js";
import Scholarship from "../models/scholarship.js";

export const addScholarshipApplication = async (req, res) => {
  const { essay, lastResult } = req.body;
  try {
    let resultImage;
    let essayFile;
    if (lastResult) {
      resultImage = await cloudinary.uploader.upload(lastResult, {
        folder: "wcim/results",
        resource_type: "image",
      });
    }

    if (essay) {
      essayFile = await cloudinary.uploader.upload(essay, {
        folder: "wcim/essays",
        resource_type: "raw",
      });
    }

    const scholarshipApplication = new Scholarship({
      ...req.body,
      essay: essayFile?.secure_url || "",
      lastResult: resultImage?.secure_url || "",
    });
    // await scholarshipApplication.save();

    console.log(scholarshipApplication);

    res.status(200).json(scholarshipApplication);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
