const About = async () => {
  const response = await fetch(`${process.env.REACT_APP_DB_URL}/companyInfo`, {
    method: "GET",
    // cache: "no-cache",
  });
  const result = await response.json();
  const { name, description, image } = result;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="주식회사 치와와르타의 사진입니다." />
      <p>{description}</p>
    </div>
  );
};

export default About;
