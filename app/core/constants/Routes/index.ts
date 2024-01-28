const ROUTES = {
  Landing: "/",
  Blogs: "/blogs",
  BlogDetails: (id: string) => ROUTES.Blogs + "/" + id,
  Estates: "/estates",
  EstateDetails: (id: string) => ROUTES.Estates + "/" + id,
  AboutUs: "/aboutUs",
};
export default ROUTES;
