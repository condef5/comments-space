export default (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      body: DataTypes.STRING
    },
    {}
  );

  return Comment;
};
