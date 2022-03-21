import {
  Container,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardHeader
} from "@mui/material";

function About() {

  return (
    <div>
      <Container 
      className="about-container">
        <Card className="card" sx={{ minWidth: 275 }} variant="outlined">
            <CardHeader 
            className="cardHeader"
            title="Trustworthy Relations"
            subheader="Immediate response" />
          <CardContent>
            <Typography variant="body2">
                Click Here
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="text">Quote</Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ minWidth: 275 }} variant="outlined">
            <CardHeader 
            className="cardHeader"
            title="Guaranteed Service"
            subheader="Perfect matches" />
          <CardContent>
            <Typography variant="body2">
                Click Here
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="text">Quote</Button>
          </CardActions>
        </Card>
        <Card className="card" sx={{ minWidth: 275 }} variant="outlined">
            <CardHeader 
            className="cardHeader"
            title="High Success Rates"
            subheader="Time valid service" />
          <CardContent>
            <Typography variant="body2">
                Click Here
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="text">Quote</Button>
          </CardActions>
        </Card>
      </Container>
    </div>
  );
}

export default About;