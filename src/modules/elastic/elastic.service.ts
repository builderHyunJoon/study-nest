import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ElasticDto } from './dto/elastic.dto';

@Injectable()
export class ElasticService {
    constructor(private readonly elasticsearchService: ElasticsearchService) { }

    async searchElstic(elasticDto: ElasticDto): Promise<any> {

        const body: any = {
            query: elasticDto.query || {},
            from: elasticDto.from || 0,
            size: elasticDto.size || 10
        }

        if (elasticDto.aggs) { body.aggs = elasticDto.aggs; };
        if (elasticDto.sort) { body.sort = elasticDto.sort; };
        if (elasticDto.highlight) { body.highlight = elasticDto.highlight; }

        try {
            const result = await this.elasticsearchService.search({
                index: 'kobrick-news-*',
                body,
            });
            console.log("elasticsearch search result: ", result);
            const highlightResult = result.body.hits.hits.map((hit) => ({
                source: hit._source,
                highlight: hit.highlight,
              }));
            return highlightResult;
        } catch (error) {
            console.error('elasticsearch search error:', error);
            throw new Error('elasticsearch failed');
        }
    }

}
