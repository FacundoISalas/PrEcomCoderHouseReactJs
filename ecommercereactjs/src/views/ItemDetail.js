import { useParams } from 'react-router-dom';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

function Category() {
	const { id } = useParams();
	let detail = '';
	if (id === '1') {
		detail = {
			id: '1',
			name: 'Spy X Family',
			priceTag: '$1800',
			imgSource:
				'https://i.pinimg.com/originals/47/ff/c1/47ffc16c5101dc5efbf435a61c05171d.png',
			description: `Spy × Family narra las aventuras del agente secreto Twilight, quien —bajo su identidad civil de Loid Forger— debe «formar una familia» para cumplir una misión y mantener la paz entre los países ficticios Ostania y Westalis.`,
		};
	} else if (id === '2') {
		detail = {
			id: '2',
			name: 'Oregairu',
			priceTag: '$1450',
			imgSource: 'https://fantasticmemes.files.wordpress.com/2019/11/oregairu1.jpg',
            description: `La historia se desarrolla en torno a un solitario estudiante de Preparatoria llamado Hachiman Hikigaya, quien tiene una cínica visión de la vida. Cuando ve a sus compañeros de clase hablando alegremente de sus vidas adolescentes, él murmura que son todos unos mentirosos.`,
		};
	} else if (id === '3') {
		detail = {
			id: '3',
			name: 'Batman',
			priceTag: '$1200',
			imgSource: 'https://cdn.shopify.com/s/files/1/1332/9529/products/grampa_front1.jpg?v=1554264351',
            description: 'En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como "el Acertijo".'
		};
	} else {
		detail = {
			id: '4',
			name: 'Spiderman',
			priceTag: '$1250',
			imgSource: 'https://www.syfy.com/sites/syfy/files/2021/11/brsm2022001_cvr.jpg',
            description: 'Mordido por una araña genéticamente modificada, un estudiante de secundaria tímido y torpe obtiene increíbles capacidades como arácnido. Pronto comprenderá que su cometido es utilizarlas para luchar contra el mal y defender a sus vecinos.',
		};
	}
	return (
		<Grid container spacing={3} marginTop={5}>
			<Grid item xs={12} sm={6} md={4}>
				<Card>
					<CardMedia
						component="img"
						height="500"
						image={detail.imgSource}
						title={detail.name}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{detail.name}
						</Typography>
						<Typography variant="body1" color="textSecondary" component="p">
							Descripcion: {detail.description}
						</Typography>
						<Typography
							marginTop={5}
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Precio: {detail.priceTag}
						</Typography>
					</CardContent>
                    <Box marginX={'auto'}>
						<Button color="primary">Comprar ahora</Button>
                        </Box>
				</Card>
			</Grid>
		</Grid>
	);
}

export default Category;
