const Recorn = require("../models/recorn");

const createRecornEntry = async (req, res) => {
  try {
    const recornEntry = await Recorn.create(req.body);
    res.status(201).json({
      status: true,
      message: "Ledger Entry Added Successfully!",
      recornEntry,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: "Error creating ledger entry" });
  }
};

const getRecornEntriesBySiteId = async (req, res) => {
  const { siteId } = req.params;
  try {
    const recornEntries = await Recorn.findOne({
      where: { site_id: siteId },
    });

    if (!recornEntries) {
      return res.status(404).json({
        status: false,
        message: "No ledger entries found for this site",
      });
    }

    res.json({ status: true, message: "Success", recornEntries });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting ledger entries" });
  }
};

module.exports = {
  createRecornEntry,
  getRecornEntriesBySiteId,
};
