export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

export const phoneWhatsApp = "51968765878"; // Reemplazar por el número real de la pollería

export const menuData: Category[] = [
  {
    id: "combos-familiares",
    name: "🔥 Banquetes & Combos Familiares",
    items: [
      {
        id: "combo-2-pollos-mega",
        name: "Mega Banquetazo: 2 Pollos + Papas + Ensalada + Gaseosa 1.5L",
        description: "2 Pollos enteros a la brasa + 2 porciones familiares de papas fritas + 1 ensalada familiar + Gaseosa 1.5L + ají y cremas completas.",
        price: 115.00,
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
        badge: "Ideal para Familias"
      },
      {
        id: "combo-1-pollo-completo",
        name: "1 Pollo a la Brasa + Papas + Ensalada + Gaseosa 1.5L",
        description: "1 Pollo a la brasa entero bien dorado + porción familiar de papas fritas + ensalada clásica + Gaseosa 1.5L + cremas de la casa.",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=80",
        badge: "Más Vendido"
      },
      {
        id: "combo-1-pollo-papas",
        name: "1 Pollo a la Brasa + Papas Familiares",
        description: "1 Pollo a la brasa entero crujiente a la leña + porción familiar de papas fritas + ají de la casa.",
        price: 52.00,
        image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "combo-medio-pollo",
        name: "1/2 Pollo a la Brasa + Papas + Ensalada",
        description: "Medio pollo a la brasa jugoso + papas fritas medianas + ensalada fresca + cremas.",
        price: 33.00,
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "los-mostritos",
    name: "🍳 Los Mostritos (Chaufa + Pollo + Papas)",
    items: [
      {
        id: "mostro-medio",
        name: "Gran Mostro: 1/2 Pollo + Chaufa + Papas",
        description: "Medio pollo a la brasa entero + montaña de arroz chaufa de pollería salteado al wok + papas fritas + ensalada + ají casero.",
        price: 38.00,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
        badge: "Para Super Apetitos"
      },
      {
        id: "mostrito-cuarto",
        name: "Mostrito Clásico: 1/4 Pollo + Chaufa + Papas",
        description: "1/4 de pollo a la brasa + plato generoso de arroz chaufa + papas fritas + ensalada + cremas.",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
        badge: "Favorito del Público"
      },
      {
        id: "mostrito-octavo",
        name: "Mostrito Junior: 1/8 Pollo + Chaufa + Papas",
        description: "1/8 de pollo a la brasa + porción de arroz chaufa al wok + papas fritas + cremas.",
        price: 15.00,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "platos-personales",
    name: "🍗 Platos Personales Clásicos",
    items: [
      {
        id: "cuarto-pollo-papas",
        name: "1/4 Pollo a la Brasa + Papas + Ensalada",
        description: "1/4 de pollo a la brasa (pierna o pecho) + papas fritas + ensalada personal + ají y cremas.",
        price: 17.00,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "octavo-pollo-papas",
        name: "1/8 Pollo a la Brasa + Papas Fritas",
        description: "1/8 de pollo a la brasa + papas fritas + cremas de la casa.",
        price: 12.00,
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "guarniciones-bebidas",
    name: "🍟 Guarniciones & Bebidas",
    items: [
      {
        id: "papas-familiares",
        name: "Porción de Papas Familiares",
        description: "Papas amarillas crocantes por fuera y suaves por dentro.",
        price: 14.00,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "arroz-chaufa-porcion",
        name: "Porción de Arroz Chaufa",
        description: "Chaufa de pollería salteado al wok con cebollita china y huevo.",
        price: 10.00,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "gaseosa-15",
        name: "Inka Kola / Coca-Cola 1.5 L",
        description: "Gaseosa helada en botella de 1.5 litros.",
        price: 11.00,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];