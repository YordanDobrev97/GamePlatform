import { Grid, Box, IconButton, Tooltip } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const games = [
    { id: 1, name: 'Game 1', image: './game-000.png' },
    { id: 2, name: 'Game 2', image: '/game-001.png' },
    { id: 3, name: 'Game 3', image: '/game-003.png' },
];

export default function GameList() {
    return (
        <Grid container spacing={2} justifyContent="center">
        {games.map((game) => (
            <Grid item gap={8} xs={6} sm={4} md={3} lg={2} key={game.id}>
                <Box
                    sx={{
                        position: 'relative',
                        '&:hover .play-button': {
                            opacity: 1,
                        },
                    }}
                >
                    <img src={game.image} alt={game.name} style={{ width: '100%', display: 'block', borderRadius: '8px' }} />
                    <Tooltip title="Play Now" arrow>
                        <IconButton className="play-button" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0, transition: 'opacity 0.3s ease' }}>
                            <PlayCircleOutlineIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Grid>
        ))}
    </Grid>
    )
}