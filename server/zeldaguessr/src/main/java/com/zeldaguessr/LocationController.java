package com.zeldaguessr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/location")
public class LocationController {
    @Autowired
    private LocationRepository locationRepository;
    private final Integer MAX_RANDOM = 5;

    @PostMapping("/add")
    public @ResponseBody String addNewLocation(@RequestBody Location loc) {
        locationRepository.save(loc);
        return "Saved";
    }

    @GetMapping("/all")
    public @ResponseBody Iterable<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    @GetMapping("/random/{numRandom}")
    public @ResponseBody Iterable<Location> getRandomLocations(@PathVariable Integer numRandom) {
        if (numRandom <= 0) {
            numRandom = 1;
        } else if (numRandom > MAX_RANDOM) {
            numRandom = MAX_RANDOM;
        }
        return locationRepository.findRandomLocations(numRandom);
    }
}
