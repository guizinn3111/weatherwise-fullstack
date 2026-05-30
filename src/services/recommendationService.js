export function getRainAlert(rainProbability, precipitation) {
    if (rainProbability >= 70 || precipitation > 1) {
      return {
        level: "high",
        message: "There's a good chance of rain. Bring an umbrella."
      };
    }
  
    if (rainProbability >= 40) {
      return {
        level: "medium",
        message: "It might rain. You should bring a small umbrella."
      };
    }
  
    return {
      level: "low",
      message: "Low chance of rain."
    };
  }
  
  export function getOutfitSuggestion(temp, rainProbability, windSpeed) {
    const items = [];
  
    if (temp <= 15) {
      items.push("jacket");
    } else if (temp <= 23) {
      items.push("light jacket");
    } else {
      items.push("light clothing");
    }
  
    if (rainProbability >= 50) {
      items.push("umbrella" , "closed-toe shoes");
    }
  
    if (windSpeed >= 25) {
      items.push("windbreaker");
    }
  
    return {
      recommendation: `Use ${items.join(", ")}.`,
      items
    };
  }
  
  export function getBestTimeToLeave(hourly) {
    const nextHours = hourly.time.slice(0, 12).map((time, index) => ({
      time,
      rainProbability: hourly.precipitation_probability[index],
      precipitation: hourly.precipitation[index],
      temperature: hourly.temperature_2m[index]
    }));
  
    const best = nextHours.sort((a, b) => {
      if (a.rainProbability !== b.rainProbability) {
        return a.rainProbability - b.rainProbability;
      }
  
      return a.precipitation - b.precipitation;
    })[0];
  
    return {
      time: best.time,
      reason: "There is a lower chance of rain during the next 12 hours."
    };
  }