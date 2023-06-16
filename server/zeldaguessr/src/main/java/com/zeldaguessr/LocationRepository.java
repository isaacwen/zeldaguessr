package com.zeldaguessr;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface LocationRepository extends CrudRepository<Location, Integer> {
    @Query(value = "SELECT * FROM location ORDER BY RAND() LIMIT :numRandom", nativeQuery = true)
    Iterable<Location> findRandomLocations(@Param("numRandom") Integer numRandom);
}
