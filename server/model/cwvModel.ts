import mongoose, { Schema } from "mongoose";
import { IUser } from "../utils/types/interface";
const cwvSchema = new mongoose.Schema<IUser>({
  lcp: {
    type: Schema.Types.Mixed,
  },
  cls: {
    type: Schema.Types.Mixed,
  },
  fcp: {
    type: Schema.Types.Mixed,
  },
});

const cwv = mongoose.model("cwv", cwvSchema);

export default cwv;
