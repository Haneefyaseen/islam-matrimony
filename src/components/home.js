import { Container } from "@mui/material";

function Home() {

  return (
    <div>
      <Container
        className="container"
        sx={{
          background:
            "linear-gradient(to bottom right, #800080, #ffc0cb)",
          display: "flex",
          flex: 1,
          height: 550,
          alignItems: "center",
        }}
      >
        <div className="home-content">
          <h1 className="main-title">ISLAM MARRIAGE SERVICES</h1>
          <p className="base-para">The best option of your choice</p>
        </div>
        <div className="home-image">
          <h4>In the name of Allah</h4>
          <p>
            Prophet Muhammad advised Muslims to marry; he forbade the practice
            of celibacy. He said, &quot;Marriage is my precept and my practice. Those
            who do not follow my practice are not of me.&quot; He also said, &quot;When a
            man has married, he has completed one half of his religion.&quot;
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Home;
