import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

function Home() {
  return (
    <Box>
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Isabel Sobe e Desce
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Sua solução em elevadores
        </Typography>
        <Button variant="contained" size="large" sx={{ mt: 4 }}>
          Entre em Contato
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Nossos Serviços
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 4,
            mt: 4,
          }}
        >
          <ServiceCard
            title="Manutenção"
            description="Serviços de manutenção preventiva e corretiva para todos os tipos de elevadores."
          />
          <ServiceCard
            title="Instalação"
            description="Instalação profissional de elevadores residenciais e comerciais."
          />
          <ServiceCard
            title="Modernização"
            description="Atualização de equipamentos antigos para maior eficiência e segurança."
          />
        </Box>
      </Container>
    </Box>
  );
}

function ServiceCard({ title, description }) {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 1,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}

export default Home; 