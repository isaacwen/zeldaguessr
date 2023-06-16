package com.zeldaguessr;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path = "/location")
public class LocationController {
    @Autowired
    private LocationRepository locationRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewLocation(@RequestBody Location loc) {
        locationRepository.save(loc);
        return "Saved";
    }

    @GetMapping(path = "/all")
    public @ResponseBody Iterable<Location> getAllLocations() {
        return locationRepository.findAll();
    }
}
