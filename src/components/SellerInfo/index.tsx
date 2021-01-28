import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informacoes sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localizacao</p>
          <strong>Pres. Venceslau, São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>456</strong>
            <span>Vendas nos últimos 5 meses</span>
          </div>
          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>
          <div>
            <strong><ClockIcon /></strong>
            <span>Vendas nos último 5 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais infomacao do vendedor</More>
    </Container>
  );
}

export default SellerInfo;