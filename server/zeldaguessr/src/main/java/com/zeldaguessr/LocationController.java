package com.zeldaguessr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Collection;

@Controller
@RequestMapping(path = "/location")
public class LocationController {
    @Autowired
    private LocationRepository locationRepository;
    private final Integer MAX_RANDOM = 5;

    @PostMapping("/add")
    public @ResponseBody String addNewLocation(@RequestBody Location loc) {
        if (locationRepository.findById(loc.getId()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "location " + loc.getId() + " already exists in db");
        }
        locationRepository.save(loc);
        return "Saved";
    }

    @GetMapping("/all")
    public @ResponseBody Integer getAllLocations() {
        Iterable<Location> locations = locationRepository.findAll();
        if (locations instanceof Collection<?>) {
            return ((Collection<?>) locations).size();
        } else {
            return -1;
        }
    }

    @CrossOrigin
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
