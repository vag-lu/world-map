import React, { useEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import "./index.scss"

type WorldMapProps = {
    onCountrySelect: (countryCode: string) => void
}


const WorldMap = ({ onCountrySelect }: WorldMapProps) => {

    useEffect(() => {

        // Create root and chart
        var root = am5.Root.new("chartdiv");

        // Set themes
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        var chart = root.container.children.push(
            am5map.MapChart.new(root, {
                panX: "rotateX",
                projection: am5map.geoNaturalEarth1()
            })
        );

        // Create polygon series
        var polygonSeries = chart.series.push(
            am5map.MapPolygonSeries.new(root, {
                geoJSON: am5geodata_worldLow,
                exclude: ["AQ"]
            })
        );

        polygonSeries.mapPolygons.template.setAll({
            tooltipText: "{name}",
            interactive: true
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: am5.color(0x677935)
        });

        polygonSeries.mapPolygons.template.events.on("click", (ev) => {

            let countryCode: string = Object(ev?.target?.dataItem?.dataContext)?.code;

            onCountrySelect(countryCode)

            //  useGetCountry(countryCode)

        });
    }, [])

    return (
        <>
            <div id="chartdiv"></div>
        </>
    )

}

export default WorldMap