const About = async () => {
  const response = await fetch("http://localhost:3000/api/company", {
    method: "GET",
    cache: "force-cache",
  });
  const result = await response.json();
  console.log(result);
  const { name, desctiption, image } = result.companyInfo;
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt="주식회사 치와와르타의 사진입니다." />
      <p>{desctiption}</p>
    </div>
  );
};

export default About;
