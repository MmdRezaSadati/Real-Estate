import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const Save = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <BookmarkBorderOutlinedIcon className="text-xl" />
      <span className="text-sm">save</span>
    </div>
  );
};

export default Save;
