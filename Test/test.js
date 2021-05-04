<div className="profile">
    <h2> Mon profil</h2>
    <Card className="card">
      <Card.Content>
        <Card.Header className="card__title">Jean-José</Card.Header>
        <Flag name='france' />
        <Card.Meta>
          <span className="card__date">Membre depuis Mars 2018</span>
        </Card.Meta>
        <Image src="https://i2.wp.com/lafondationfrancaise.org/wp-content/uploads/2020/12/portrait-de-jeune-homme-beau-sur-le-sofa-62234418.jpg?fit=601%2C900&ssl=1" wrapped ui={false} />
        <Card.Description className="card__description">
          Massy-Palaiseau, France
        </Card.Description>
      </Card.Content>
    </Card>

    <ProfileDescription />
    <ContactMe />
  </div>
