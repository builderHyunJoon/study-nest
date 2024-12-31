import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { ElasticDto } from './dto/elastic.dto';

@Injectable()
export class ElasticService {
    constructor(private readonly elasticsearchService: ElasticsearchService) { }

    async searchElstic(elasticDto: ElasticDto): Promise<any> {
        const { query, aggs, from, size, sort } = elasticDto;

        const body: any = {
            query: query || {},
            from: from || 0,
            size: size || 10
        }

        if (aggs) { body.aggs = aggs; };
        if (sort) { body.sort = sort; };

        try {
            const result = await this.elasticsearchService.search({
                index: 'kobrick-news-*',
                body,
            });
            console.log("elasticsearch search result: ", result);
            return result.body;
        } catch (error) {
            console.error('elasticsearch search error:', error);
            throw new Error('elasticsearch failed');
        }
    }

}
