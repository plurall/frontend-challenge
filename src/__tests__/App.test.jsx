import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

// Shallow rendering test
const renderer = new ShallowRenderer();
renderer.render(<App />);