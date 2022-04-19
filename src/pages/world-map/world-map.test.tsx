import {render, screen} from '@testing-library/react';
import WorldMap from './index';

describe("World Map", () => {
    test("chartDiv is rendered", () => {

        render(<WorldMap />);

        const map = screen.getByTestId('chartdiv');

        expect(map).toBeInTheDocument();
    });
});